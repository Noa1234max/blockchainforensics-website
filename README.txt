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


PREMIUM DESIGN UPDATE
- Compact logo and refined top navigation: Contact Us, About Us, Our Location.
- Added Toronto location panel using the address supplied by the site owner:
  100 Adelaide Street West, Toronto, Ontario, Canada.
- Client dashboard market quotes request refresh every 5 seconds.
- Market quotes are indicative CAD prices from CoinGecko; provider limits or network delays may affect update timing.


LIVE CLIENT BALANCE VALUATION
- Every successful 5-second market quote refresh recalculates each client's displayed CAD value for their assigned BTC, ETH, SOL, XRP, DOGE and USDC quantities.
