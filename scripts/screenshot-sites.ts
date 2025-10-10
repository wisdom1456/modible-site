// Capture homepage screenshots for portfolio sites using Playwright
// Outputs 1200x800 JPGs into static/images/art/

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const OUTPUT_DIR = path.resolve('static/images/art');

const sites: Array<{ slug: string; url: string; file: string }> = [
  { slug: 'okaloosabar', url: 'https://www.okaloosabar.com', file: 'okaloosabar-preview.jpg' },
  { slug: 'remol-law', url: 'https://www.remollawfirm.com', file: 'remol-law-preview.jpg' },
  { slug: 'pjays-pools', url: 'https://www.pjayspools.com', file: "pjays-pools-preview.jpg" },
  { slug: 'tonya-holman', url: 'https://www.tonyaholmanlawfirm.com', file: 'tonya-holman-preview.jpg' },
  { slug: 'cottonlandtitle', url: 'https://www.cottonlandtitle.com', file: 'cottonlandtitle-preview.jpg' },
  { slug: 'n1l3', url: 'https://www.n1l3.com', file: 'n1l3-preview.jpg' },
  { slug: 'waterhouse', url: 'https://www.waterhouselawfirm.com', file: 'waterhouse-preview.jpg' },
  { slug: 'ofawl', url: 'https://www.ofawl.org', file: 'ofawl-preview.jpg' },
  { slug: 'keepitrealtime', url: 'https://www.keepitrealtime.com', file: 'keepitrealtime-preview.jpg' },
  { slug: 'franklins-treehouse', url: 'https://www.franklinstreehouse.org', file: 'franklins-treehouse-preview.jpg' }
];

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1200, height: 800 }, ignoreHTTPSErrors: true });

  for (const { url, file } of sites) {
    const outPath = path.join(OUTPUT_DIR, file);
    try {
      const page = await context.newPage();
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
      // Try to wait for network to settle but cap total wait
      try {
        await page.waitForLoadState('networkidle', { timeout: 8000 });
      } catch {}
      await page.screenshot({ path: outPath, type: 'jpeg', quality: 80, fullPage: false });
      await page.close();
      console.log(`Saved ${outPath}`);
    } catch (e) {
      console.warn(`Failed to capture ${url}:`, (e as Error).message);
      // Leave existing or placeholder file in place if any
    }
  }

  await context.close();
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


