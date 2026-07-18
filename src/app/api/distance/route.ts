import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rateLimit';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!rateLimit(ip, 10, 60000)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    const body = await request.json();
    const { lat, lon } = body;

    if (!lat || !lon) {
      return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 });
    }

    // Default to Kirchheim unter Teck if env vars are not set (fallback/demo mode)
    // ideally these should be set in .env.local   
    const homeLat = parseFloat(process.env.HOME_LAT || '48.634512');
    const homeLon = parseFloat(process.env.HOME_LON || '9.4555054');

    const deg2rad = (deg: number) => {
      return deg * (Math.PI / 180);
    };

    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      return d;
    };

    const distance = calculateDistance(lat, lon, homeLat, homeLon);

    let travelStats = null;
    
    // Fetch driving duration from OSRM
    try {
      const osrmResponse = await fetch(`https://router.project-osrm.org/route/v1/driving/${lon},${lat};${homeLon},${homeLat}?overview=false`);
      const osrmData = await osrmResponse.json();
      
      if (osrmData.routes && osrmData.routes.length > 0) {
        const durationSeconds = osrmData.routes[0].duration;
        const drivingMinutes = Math.round(durationSeconds / 60);
        
        // Heuristic for Public Transport: Driving time * 1.5 + 15 mins buffer
        const ptMinutes = Math.round(drivingMinutes * 1.5 + 15);

        travelStats = {
          car: `${drivingMinutes} min`,
          publicTransport: `~${ptMinutes} min`,
          carMinutes: drivingMinutes,
          ptMinutes: ptMinutes
        };
      }
    } catch (e) {
      console.error('Failed to fetch travel stats', e);
    }

    return NextResponse.json({ distance, travelStats });
  } catch (error) {
    console.error('Distance API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
