import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data/linkedin_export');
const OUTPUT_FILE = path.join(process.cwd(), 'src/data/linkedin_profile.json');

// Simple CSV parser that handles quoted fields with newlines
function parseCSV(content: string): Record<string, string>[] {
  const lines: string[] = [];
  let currentLine = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    }
    if (char === '\n' && !inQuotes) {
      lines.push(currentLine);
      currentLine = '';
    } else {
      currentLine += char;
    }
  }
  if (currentLine) lines.push(currentLine);

  if (lines.length === 0) return [];

  const headers = parseLine(lines[0]);
  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = parseLine(line);
    const obj: Record<string, string> = {};

    headers.forEach((header, index) => {
      // Clean header name (remove spaces, lowercase)
      const key = header.trim();
      obj[key] = values[index] || '';
    });

    result.push(obj);
  }

  return result;
}

function parseLine(line: string): string[] {
  const values: string[] = [];
  let currentValue = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        // Escaped quote
        currentValue += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      values.push(currentValue);
      currentValue = '';
    } else {
      currentValue += char;
    }
  }
  values.push(currentValue);

  return values;
}

async function main() {
  try {
    const files = fs.readdirSync(DATA_DIR);
    const finalData: Record<string, unknown> = {};

    for (const file of files) {
      if (!file.endsWith('.csv')) continue;

      const key = file.replace('.csv', '').toLowerCase();
      const content = fs.readFileSync(path.join(DATA_DIR, file), 'utf-8');

      console.log(`Processing ${file}...`);
      const parsedData = parseCSV(content);

      // Special handling for Profile (should be an object, not array)
      if (key === 'profile' && parsedData.length > 0) {
        finalData[key] = parsedData[0];
      } else {
        finalData[key] = parsedData;
      }
    }

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalData, null, 2));
    console.log(`Successfully wrote data to ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error processing data:', error);
  }
}

main();
