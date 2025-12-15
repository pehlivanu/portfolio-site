
# Domain Setup Guide: liviuionesi.com

Since I cannot directly access your Ionos or Vercel account dashboards, you will need to perform these configuration steps manually.

## Phase 1: Vercel Configuration

1.  **Log in to Vercel** and navigate to your project dashboard.
2.  Go to **Settings** > **Domains**.
3.  Enter `liviuionesi.com` in the input field and click **Add**.
4.  Select the option to add `www.liviuionesi.com` as well if prompted (recommended).
5.  Vercel will generate a set of **DNS Records** (A Record and CNAME) that contain invalid configuration errors. **Keep this page open**, you need these values for Ionos.

## Phase 2: Ionos DNS Configuration

1.  **Log in to Ionos** (https://www.ionos.com).
2.  Go to **Domains & SSL**.
3.  Click on your domain `liviuionesi.com`.
4.  Select the **DNS** tab.
5.  **Important:** You may need to delete or modify existing A/AAAA records that point to Ionos default pages to avoid conflicts.

### Add the Main Record (Root Domain)
*   **Type**: `A`
*   **Host Name**: `@` (or leave empty if Ionos requires it)
*   **Value** (Points to): `76.76.21.21` (This is Vercel's Fixed IP)
*   **TTL**: 1 Hour (or default)

### Add the Subdomain Record (www)
*   **Type**: `CNAME`
*   **Host Name**: `www`
*   **Value** (Points to): `cname.vercel-dns.com`
*   **TTL**: 1 Hour

## Phase 3: Verification

1.  Go back to the **Vercel Domains** settings page.
2.  It may take a few minutes (up to 48 hours in rare cases) for the changes to propagate.
3.  Once the error messages turn valid (Green), your site is live!

## SEO Update
I have automatically updated your project to use `https://liviuionesi.com` as the canonical URL for SEO purposes.
