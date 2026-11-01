CLHD & Blockchain Forensics — Worker-connected website package

This ZIP preserves the existing website design, English/French language switch,
compact logo, market chart and four-field client login.

IMPORTANT DEPLOYMENT REQUIREMENT
The static website and Worker API must be available on the SAME ORIGIN.
The website JavaScript calls relative endpoints:
  POST /api/client/login
  GET  /api/client/me
  POST /api/client/logout

Configure Cloudflare so requests to https://cryptolosshelpdesk.org/api/*
are routed to the clhd-case-system Worker, while normal website files
(index.html, styles.css, script.js and icons) continue to be served as the
static website. Do NOT point the whole /login page to the Worker: the
original four-field login is part of index.html.

The Worker must have the D1 binding named DB pointing to clhd-cases and
must expose the endpoints above. Its login endpoint expects first_name,
last_name, case_number and password.

The client dashboard reads virtual balances from GET /api/client/me.
Balances are simulation-only. This site does not hold, recover, exchange
or transfer real cryptocurrency.

Upload the ZIP contents to the static website root. Do not paste these
website files into the Worker code editor.
