# Viraj & Dhwani Wedding Website

A minimal Gujarati-inspired wedding invitation website built with Next.js and Tailwind CSS.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit http://localhost:3000.

## Before publishing, update these details

- `app/page.jsx`: Confirm the Mandap and Sangeet date. This starter currently assumes **25 January 2027** because the supplied date was 25 January 2026, which is before the 26 January 2027 wedding.
- Add the exact Haldi, Mandap, Sangeet and Lagan timings.
- Replace venue name, city, address and Google Maps link.
- Replace `91XXXXXXXXXX` in the RSVP WhatsApp URL with the family's WhatsApp number (country code, no + or spaces).
- Add couple/family photographs if desired.
- Update the countdown target time in `Countdown()` once the Lagan muhurat is confirmed.

## GitHub + Vercel deployment

1. Create a new empty GitHub repository, for example `viraj-dhwani-wedding`.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Create Viraj and Dhwani wedding website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/viraj-dhwani-wedding.git
   git push -u origin main
   ```
3. Sign in to Vercel using GitHub.
4. Choose **Add New → Project**, import `viraj-dhwani-wedding`.
5. Keep the detected Next.js framework settings and click **Deploy**.
6. Vercel will provide a live `*.vercel.app` URL. Future pushes to `main` will automatically redeploy.
7. To use a custom domain, add it under the Vercel project's **Settings → Domains** and follow the DNS instructions.

## RSVP note

The WhatsApp RSVP link is a placeholder. It opens a prefilled WhatsApp message after you replace the sample number. This starter does not store RSVP responses in a database.
