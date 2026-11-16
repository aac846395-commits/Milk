# Chauhan Dairy — Milk Supply Tracker

A mobile-friendly Progressive Web App (PWA) for managing daily milk collection, customers, milk entries, payments, reminders, and reports.

## Features
- Customer profiles, search, edit, deactivate/reactivate, and **permanent customer deletion**
- Milk entries by date, morning/evening session, animal type, quantity, and rate
- Customer balances and payment records
- Daily/monthly reports, CSV export, printable statements and bills
- JSON backup/restore
- v3.1: app PIN lock, frozen issued bills (B-0001…), safety copies on device, share-backup reminder every 2 days
- v3.0: date validation, bulk-save confirmation, locked months also lock payments, same-day payment cycle fix, large-data storage fix
- Offline-friendly service worker and installable PWA
- Chauhan Dairy app icon and branding

## Files included
- `index.html` — application
- `manifest.json` — PWA metadata
- `sw.js` — offline cache
- `icon-192.png`, `icon-512.png` — app icons; `icon-maskable-192.png`, `icon-maskable-512.png` — Android adaptive icons
- `.nojekyll` — tells GitHub Pages to serve files as-is

## Publish on GitHub Pages
1. Create a new GitHub repository (for example `chauhan-dairy`).
2. Upload **all files in this folder** to the repository root: `index.html`, `manifest.json`, `sw.js`, all four icon PNGs and `.nojekyll`.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Wait for deployment and open the published Pages URL. Use HTTPS for PWA installation and offline caching.

## Important data note
This app stores data in the browser/device where it is used; it does not sync customer records between devices or users. Download a JSON backup before updating the app or permanently deleting a customer. Permanent deletion also removes that customer's milk entries and payment records from this device.

## Dependencies
The current app references Google Fonts and html2pdf.js from CDNs. Those features may require an internet connection unless the resources are already cached.

## Privacy
Do not publish real customer records or backups in this repository. The repository should contain app code and icons only.

## Install from Chrome
Open your GitHub Pages URL in Chrome → menu (⋮) → **Install app** / **Add to Home screen**.

## v3.2 (security + data-safety release)
- Data ab 6-digit PIN se AES-GCM encrypt hota hai (PBKDF2). PIN bhoolne par data wapas nahi aata — backup file rakhein.
- Double-tap se duplicate payment/customer/entry nahi banta.
- Corrupt data par overwrite nahi; kharab copy alag rakhi jaati hai aur safety copy se restore ka option aata hai.
- Restore: IDs safe, amount = qty × rate dobara calculate, checksum check, empty-backup warning, fail hone par rollback.
- Limits: qty ≤ 500 L, rate ≤ ₹10,000, payment ≤ ₹1 crore, max 2 decimal. Mobile 6-9 se shuru, UPI format check.
- Customer codes dobara use nahi hote; locked mahine wale customer delete nahi hote.
- Safety copies compressed (+encrypted jab PIN ho). CSP lagaya, PDF library offline precache.
- Limitation: backup JSON file khud encrypt nahi hoti; PDF/CDN features online ek baar load hone par hi chalte hain.
