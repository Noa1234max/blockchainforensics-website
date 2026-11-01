CLHD & Blockchain Forensics — Original Website Package

Contents:
- index.html
- styles.css
- script.js
- favicon and app icons

This package preserves the original front-end version. It does not include the later Cloudflare Worker login integration.

Deployment:
1. Extract this ZIP.
2. Upload the files and icons to the root of your static website hosting.
3. Keep index.html, styles.css, and script.js in the same folder.
4. Do not upload this static package as Worker source code.

Important: Any displayed balances or assets must be clearly identified as virtual/simulated unless they are backed by verified real custody and records.


FIXES IN THIS PACKAGE
- Client demo session is stored in localStorage so a page refresh restores the dashboard on the same browser/device. This is a front-end preview only; it is NOT authentication and must not be used for real client records.
- Chart is resized/redrawn when the dashboard opens; market history is cached locally.
- Market refresh interval is 30 seconds to reduce rate-limit pressure.
- Oversized hero graphic is hidden and branding is compact.

IMPORTANT SECURITY NOTE
The login form in this static package still performs front-end-only checks. It does not authenticate against Cloudflare. Do not use it to protect confidential client data. The next separate step is to connect the login to the Cloudflare Worker and remove the local demo-session shortcut.
