const $=s=>document.querySelector(s);
const translations={
en:{navServices:"Services",navProcess:"Our process",navAbout:"About Us",navContact:"Contact Us",navLocation:"Our Location",login:"Client login",eyebrow:"DIGITAL ASSET CASE SUPPORT",heroTitle:"Clarity for complex<br><em>blockchain matters.</em>",heroLead:"We are here to investigate your case with care, precision and a clear, methodical approach.",accessCase:"Access your case",exploreServices:"Explore our services",confidential:"Confidential case handling",structured:"Structured investigations",metricOne:"Case-led approach",metricTwo:"Secure access portal",metricThree:"Digital asset review",servicesTitle:"Focused support. <em>Clear next steps.</em>",servicesLead:"A considered process for reviewing digital-asset concerns and organising case information.",s1Title:"Case assessment",s1Text:"Organising the details of your matter and identifying the questions that need attention.",s2Title:"Blockchain analysis",s2Text:"Reviewing transaction information and wallet-related details supplied for your case.",s3Title:"Case guidance",s3Text:"Presenting findings and practical next steps in a clear, understandable format.",processTitle:"Every case deserves<br><em>careful attention.</em>",processLead:"We focus on understanding the information, reviewing the details and communicating the next steps with clarity.",step1:"Share your case details",step1p:"Provide the relevant case reference and background.",step2:"Review & investigate",step2p:"Information is organised for a structured review.",step3:"Understand next steps",step3p:"Receive a clear summary of the case workflow.",aboutTitle:"Here to investigate your case in the best way possible.",aboutText:"Our approach is centred on careful review, clear communication and respect for the sensitive nature of digital-asset matters.",loginTitle:"Access your case",loginLead:"Enter the details associated with your case reference.",firstName:"First name",lastName:"Last name",caseNumber:"Case number",password:"Password",continue:"Continue",securityNote:"For your privacy, access your case in a private setting. Do not share your password, recovery phrase or private keys.",previewNote:"Private preview portal — no real assets or balances are displayed, held or transferred.",myBalance:"My Balance",digitalAssets:"Digital assets",marketNote:"Indicative market prices in Canadian dollars. These are market quotes, not your account balance.",lastUpdated:"Last updated",autoRefresh:"Refreshes every 5 seconds (provider updates may be delayed)",balanceEmpty:"Your balance is currently empty.",assetDisclosure:"",logout:"Log out",welcome:"Welcome back,",dashboardLead:"Your case overview and current workflow status.",caseReference:"CASE REFERENCE",caseStatus:"Case status: Under review",caseStatusText:"Your case information is displayed below for this private preview.",assetOverview:"Digital asset overview",illustrative:"ACCOUNT OVERVIEW",totalValue:"Total portfolio value",balanceCaption:"Portfolio overview",withdrawalTitle:"Withdrawal requests",newRequest:"New request",requestLabel:"Withdrawal request",requestSub:"Request status: awaiting review."},
fr:{navServices:"Services",navProcess:"Notre méthode",navAbout:"À propos",navContact:"Contact",navLocation:"Notre adresse",login:"Accès client",eyebrow:"ACCOMPAGNEMENT DES DOSSIERS D’ACTIFS NUMÉRIQUES",heroTitle:"De la clarté pour les<br><em>enjeux blockchain.</em>",heroLead:"Nous sommes là pour examiner votre dossier avec attention, précision et méthode.",accessCase:"Accéder à votre dossier",exploreServices:"Découvrir nos services",confidential:"Traitement confidentiel",structured:"Enquêtes structurées",metricOne:"Approche par dossier",metricTwo:"Portail d’accès sécurisé",metricThree:"Analyse des actifs numériques",servicesTitle:"Un accompagnement ciblé. <em>Des étapes claires.</em>",servicesLead:"Une démarche réfléchie pour examiner les questions liées aux actifs numériques et organiser les informations du dossier.",s1Title:"Évaluation du dossier",s1Text:"Organiser les détails de votre dossier et identifier les points nécessitant une attention particulière.",s2Title:"Analyse blockchain",s2Text:"Examiner les informations de transaction et les détails de portefeuille fournis pour votre dossier.",s3Title:"Orientation du dossier",s3Text:"Présenter les constats et les prochaines étapes de manière claire et compréhensible.",processTitle:"Chaque dossier mérite<br><em>une attention rigoureuse.</em>",processLead:"Nous cherchons à comprendre les informations, examiner les détails et communiquer clairement les prochaines étapes.",step1:"Présentez votre dossier",step1p:"Fournissez la référence et le contexte pertinents.",step2:"Examen et enquête",step2p:"Les informations sont organisées en vue d’un examen structuré.",step3:"Comprendre les prochaines étapes",step3p:"Recevez un résumé clair du déroulement du dossier.",aboutTitle:"Nous sommes là pour examiner votre dossier du mieux possible.",aboutText:"Notre approche repose sur un examen attentif, une communication claire et le respect de la nature sensible des questions liées aux actifs numériques.",loginTitle:"Accéder à votre dossier",loginLead:"Saisissez les informations associées à votre référence de dossier.",firstName:"Prénom",lastName:"Nom",caseNumber:"Numéro de dossier",password:"Mot de passe",continue:"Continuer",securityNote:"Pour votre confidentialité, consultez votre dossier dans un environnement privé. Ne partagez pas votre mot de passe, phrase de récupération ou clés privées.",previewNote:"Portail privé de démonstration — aucun actif ni solde réel n’est affiché, détenu ou transféré.",myBalance:"Mon solde",digitalAssets:"Actifs numériques",marketNote:"Prix indicatifs du marché en dollars canadiens. Il s’agit de cours du marché, pas du solde de votre compte.",lastUpdated:"Dernière mise à jour",autoRefresh:"Actualisation toutes les 5 secondes (les données du fournisseur peuvent être retardées)",balanceEmpty:"Votre solde est actuellement vide. Les fonds ne peuvent être ajoutés que par un administrateur autorisé.",assetDisclosure:"Les cours sont indicatifs uniquement. Ce portail ne conserve ni ne transfère de cryptomonnaies.",logout:"Déconnexion",welcome:"Bon retour,",dashboardLead:"Aperçu de votre dossier et état actuel du traitement.",caseReference:"RÉFÉRENCE DU DOSSIER",caseStatus:"État du dossier : en cours d’examen",caseStatusText:"Les informations de votre dossier sont présentées ci-dessous dans cet aperçu privé.",assetOverview:"Aperçu des actifs numériques",illustrative:"APERÇU DU COMPTE",totalValue:"Valeur totale du portefeuille",balanceCaption:"Aperçu du portefeuille",withdrawalTitle:"Demandes de retrait",newRequest:"Nouvelle demande",requestLabel:"Demande de retrait",requestSub:"Les demandes restent en attente dans ce portail d’aperçu."}
};
let lang="en";
function setLang(){document.documentElement.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k])el.innerHTML=translations[lang][k]});$("#langBtn").textContent=lang==="en"?"FR":"EN"}
$("#langBtn").addEventListener("click",()=>{lang=lang==="en"?"fr":"en";setLang()});
function showLogin(){$("#loginModal").classList.add("open");$("#loginModal").setAttribute("aria-hidden","false");$("#firstName").focus()}
function closeLogin(){$("#loginModal").classList.remove("open");$("#loginModal").setAttribute("aria-hidden","true")}
$("#loginTop").onclick=showLogin;$("#loginHero").onclick=showLogin;$("#closeLogin").onclick=closeLogin;
$("#loginModal").addEventListener("click",e=>{if(e.target===$("#loginModal"))closeLogin()});

function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2800)}

let authenticatedClient = null;

let latestMarketPrices = {};
let currentClientAssets = [];
function showAccountBalances(assets){
  const el=$("#clientBalance");
  if(!el) return;
  if(Array.isArray(assets)) currentClientAssets=assets;
  const rows=currentClientAssets.filter(item => Number(item.balance) > 0);
  el.replaceChildren();
  el.classList.remove("empty-balance");
  if(!rows.length) return;

  const priceBySymbol={};
  marketCoins.forEach(c=>{if(typeof latestMarketPrices[c.id]==="number")priceBySymbol[c.symbol]=latestMarketPrices[c.id];});
  const heading=document.createElement("strong");
  heading.className="account-balance-heading";
  heading.textContent=lang==="fr"?"Fonds du propriétaire légal — valeur indicative en CAD":"Funds of the legal owner — indicative value in CAD";
  el.append(heading);
  const list=document.createElement("div");
  list.className="account-balance-list";
  let totalCad=0, pricedCount=0;
  const logos={
    BTC:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNGNzkzMUEiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNDMuOCAyNy4xYy45LTYtMy43LTkuMi0xMC0xMS4zbDItOC00LjktMS4yLTIgNy44LTQtLjkgMi03LjhMMjIgNC41bC0yIDgtMTAuMS0yLjUtMS4zIDUuMiAzLjggMWMxLjcuNCAyIDEuMSAxLjggMi40TDguNyAzOS4xYy0uMyAxLS45IDEuNC0yLjEgMS4xbC0zLjgtMS0yLjUgNS42IDEwIDIuNS0yIDggNC45IDEuMiAyLTggNCAuOS0yIDggNC45IDEuMiAyLTguMWM4LjQgMS42IDE0LjcgMSAxNy4zLTYuNyAyLjEtNi4yLS4xLTkuOC00LjQtMTIuMSAzLjEtLjcgNS40LTIuOCA2LTcuNnpNMzQuMiA0M2MtMS41IDUuOC0xMS41IDIuNy0xNC43IDEuOWwyLjYtMTAuNGMzLjIuOCAxMy43IDIuMyAxMi4xIDguNXptMS41LTE2LjFjLTEuNCA1LjMtOS43IDIuNi0xMi40IDEuOWwyLjQtOS40YzIuNy43IDExLjUgMS45IDEwIDcuNXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDggMikgc2NhbGUoLjc4KSIvPjwvc3ZnPg==" alt="BTC logo" loading="eager" decoding="async">',
    ETH:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzhDOEM4QyIgZD0iTTMyIDMgMTMgMzNsMTkgOSAxOS05eiIvPjxwYXRoIGZpbGw9IiMzNDM0MzQiIGQ9Ik0zMiAzdjM5bDE5LTl6Ii8+PHBhdGggZmlsbD0iI0I4QjhCOCIgZD0ibTEzIDM3IDE5IDI0VjQ2eiIvPjxwYXRoIGZpbGw9IiM2ODY4NjgiIGQ9Ik0zMiA0NnYxNWwxOS0yNHoiLz48cGF0aCBmaWxsPSIjMTYxNjE2IiBkPSJtMTMgMzMgMTkgOVYzeiIvPjwvc3ZnPg==" alt="ETH logo" loading="eager" decoding="async">',
    SOL:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIHN0b3AtY29sb3I9IiMwMEZGQTMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwM0UxRkYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZzIiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBzdG9wLWNvbG9yPSIjREMxRkZGIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBGRkEzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImczIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iIzAwRkZBMyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0RDMUZGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjZzEpIiBkPSJNMTUgMTJoNDBMNDUgMjNINXoiLz48cGF0aCBmaWxsPSJ1cmwoI2cyKSIgZD0iTTE5IDI3aDQwTDQ1IDM4SDV6Ii8+PHBhdGggZmlsbD0idXJsKCNnMykiIGQ9Ik0xNSA0Mmg0MEw0NSA1M0g1eiIvPjwvc3ZnPg==" alt="SOL logo" loading="eager" decoding="async">',
    XRP:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZmlsbD0iIzExMTgyMCIgZD0iTTEzIDEwaDhsMTEgMTJjNSA1IDkgNSAxNCAwbDExLTEyaDhMNDkgMjVjLTkgOS0yNSA5LTM0IDBMMSAxMGgxMnptMCA0NEgxbDE0LTE1YzktOSAyNS05IDM0IDBsMTQgMTVoLThMNDQgNDJjLTUtNS05LTUtMTQgMEwxOSA1NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L3N2Zz4=" alt="XRP logo" loading="eager" decoding="async">',
    DOGE:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiNDMkE2MzMiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyNSIgZmlsbD0iI0U4RDE3QSIvPjxwYXRoIGZpbGw9IiM4QjZCMjIiIGQ9Ik0xNiAyNSAxOCAxM2wxMiA4IDEwLTMgMTAgOS0zIDE3LTEzIDktMTQtNi03LTEyeiIvPjxwYXRoIGZpbGw9IiNGN0U4QjEiIGQ9Im0yMCAyNSAxLTcgOCA2IDEwLTMgOCA4LTMgMTQtMTEgNy0xMi02LTUtMTB6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI0IDMxYTQgNCAwIDEgMCAwLS4xem0xNSAwYTQgNCAwIDEgMCAwLS4xeiIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMzIiIHI9IjEuOCIgZmlsbD0iIzIyMiIvPjxjaXJjbGUgY3g9IjQwIiBjeT0iMzIiIHI9IjEuOCIgZmlsbD0iIzIyMiIvPjxwYXRoIGQ9Ik0zMCAzOXEzIDMgNiAwIiBmaWxsPSJub25lIiBzdHJva2U9IiM0OTM1MUMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0ibTE4IDIzLTQtNyAxMCA1bTIyIDEgNS03LTEgMTMiIGZpbGw9IiNCMjhBMkQiLz48L3N2Zz4=" alt="DOGE logo" loading="eager" decoding="async">',
    USDC:'<img class="asset-logo-img" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMzAiIGZpbGw9IiMyNzc1Q0EiLz48Y2lyY2xlIGN4PSIzMiIgY3k9IjMyIiByPSIyMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiLz48cGF0aCBkPSJNMzIgMTd2MzBNMjQgMjNjMi0zIDUtNCA4LTQgNSAwIDggMiA4IDYgMCA0LTMgNS04IDdzLTggMy04IDcgMyA2IDggNmM0IDAgNy0xIDktNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+" alt="USDC logo" loading="eager" decoding="async">',
  };
  for(const item of rows){
    const symbolText=String(item.asset||"").toUpperCase();
    const quantity=Number(item.balance);
    const safeQuantity=Number.isFinite(quantity)?quantity:0;
    const unitPrice=priceBySymbol[symbolText];
    const line=document.createElement("div");
    line.className="account-balance-row";
    const logo=document.createElement("div");
    logo.innerHTML=logos[symbolText]||'<span class="asset-logo asset-logo-generic">'+symbolText.slice(0,1)+'</span>';
    const details=document.createElement("div");
    details.className="account-balance-details";
    const label=document.createElement("strong");
    label.className="asset-symbol";
    label.textContent=symbolText;
    const amount=document.createElement("span");
    amount.className="asset-quantity";
    amount.textContent=safeQuantity.toLocaleString(undefined,{maximumFractionDigits:8})+" "+symbolText;
    const cad=document.createElement("strong");
    cad.className="asset-cad-value";
    if(typeof unitPrice==="number"){
      const value=safeQuantity*unitPrice;
      totalCad+=value;pricedCount++;
      cad.textContent=cadFormatter.format(value);
    }else{
      cad.textContent=lang==="fr"?"Cours CAD indisponible":"CAD quote unavailable";
    }
    details.append(label,amount,cad);
    line.append(logo.firstElementChild,details);
    list.append(line);
  }
  el.append(list);
  if(pricedCount){
    const total=document.createElement("div");
    total.className="account-balance-total";
    const totalLabel=document.createElement("span");
    totalLabel.textContent=lang==="fr"?"Valeur totale estimée":"Estimated total value";
    const totalValue=document.createElement("strong");
    totalValue.textContent=cadFormatter.format(totalCad);
    total.append(totalLabel,totalValue);
    el.append(total);
  }
}

async function clientApi(path, options={}){
  const response=await fetch(path,{...options,credentials:"same-origin",headers:{...(options.headers||{})}});
  let data={};
  try{data=await response.json()}catch(_){}
  if(!response.ok) throw new Error(data.error||"Request failed");
  return data;
}

function openDashboard(user, assets=[]){
  authenticatedClient=user;
  $("#welcomeName").textContent=user.first;
  $("#userDisplay").textContent=user.first+" "+user.last;
  $("#userInitials").textContent=((user.first[0]||"C")+(user.last[0]||"L")).toUpperCase();
  $("#dashCase").textContent=user.caseNo;
  closeLogin();
  $("#dashboard").classList.add("open");
  $("#dashboard").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
  showAccountBalances(assets);
  requestAnimationFrame(()=>{if(assetChart){assetChart.resize();drawAssetChart();}refreshMarketPrices();});
}

async function restoreSession(){
  try{
    const data=await clientApi("/api/client/me");
    const c=data.client;
    if(!c) throw new Error("No active client session");
    openDashboard({first:c.first_name||"",last:c.last_name||"",caseNo:c.case_number||""},data.assets||[]);
  }catch(_){
    authenticatedClient=null;
    $("#dashboard").classList.remove("open");
    $("#dashboard").setAttribute("aria-hidden","true");
    document.body.style.overflow="";
  }
}

$("#loginForm").addEventListener("submit",async e=>{
  e.preventDefault();
  const first=$("#firstName").value.trim(),last=$("#lastName").value.trim();
  const caseNo=$("#caseNumber").value.trim().toUpperCase(),password=$("#password").value;
  const error=$("#loginError");
  if(!first||!last||!caseNo||!password){error.textContent="Please complete all fields.";return;}
  if(!/^CLHD-[A-Z0-9-]+$/i.test(caseNo)){error.textContent="Please enter a valid case reference.";return;}
  error.textContent=lang==="fr"?"Vérification des identifiants…":"Verifying your details…";
  const submit=e.currentTarget.querySelector('button[type="submit"]');
  if(submit)submit.disabled=true;
  try{
    await clientApi("/api/client/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({first_name:first,last_name:last,case_number:caseNo,password})});
    const data=await clientApi("/api/client/me"),c=data.client;
    openDashboard({first:c.first_name||first,last:c.last_name||last,caseNo:c.case_number||caseNo},data.assets||[]);
    $("#password").value="";error.textContent="";
  }catch(err){error.textContent=err.message||"Login failed. Please try again.";}
  finally{if(submit)submit.disabled=false;}
});

$("#logout").onclick=async()=>{
  try{await clientApi("/api/client/logout",{method:"POST"});}catch(_){}
  authenticatedClient=null;
  $("#dashboard").classList.remove("open");
  $("#dashboard").setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  $("#loginForm").reset();
  showLogin();
};

if($("#requestWithdraw"))$("#requestWithdraw").onclick=()=>toast(lang==="fr"?"Les demandes de retrait simulées ne sont pas activées dans cette interface.":"Simulated withdrawal requests are not enabled in this website interface.");
setLang();
restoreSession();

const marketCoins=[
 {id:"bitcoin",symbol:"BTC",name:"Bitcoin",icon:"₿"},
 {id:"ethereum",symbol:"ETH",name:"Ethereum",icon:"Ξ"},
 {id:"solana",symbol:"SOL",name:"Solana",icon:"◎"},
 {id:"ripple",symbol:"XRP",name:"XRP",icon:"X"},
 {id:"dogecoin",symbol:"DOGE",name:"Dogecoin",icon:"Ð"},
 {id:"usd-coin",symbol:"USDC",name:"USD Coin",icon:"$"}
];
const coinHistory=(()=>{try{return JSON.parse(localStorage.getItem("clhd-market-history")||"{}")}catch(_){return {}}})();let selectedCoin="bitcoin";let assetChart=null;let marketBusy=false;
const coinLabels=Object.fromEntries([["bitcoin","Bitcoin (BTC)"],["ethereum","Ethereum (ETH)"],["solana","Solana (SOL)"],["ripple","XRP"],["dogecoin","Dogecoin (DOGE)"],["usd-coin","USD Coin (USDC)"]]);
function drawAssetChart(){const canvas=$("#assetChart");if(!canvas||!window.Chart)return;const points=coinHistory[selectedCoin]||[];$("#chartAssetName").textContent=coinLabels[selectedCoin]||selectedCoin;if(assetChart){assetChart.data.labels=points.map(p=>p.time);assetChart.data.datasets[0].data=points.map(p=>p.price);assetChart.update("none");return;}assetChart=new Chart(canvas,{type:"line",data:{labels:points.map(p=>p.time),datasets:[{label:"CAD",data:points.map(p=>p.price),borderColor:"#2876d2",backgroundColor:"rgba(40,118,210,.12)",fill:true,tension:.25,pointRadius:0,borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{display:false}},scales:{x:{ticks:{maxTicksLimit:6,color:"#71849d"},grid:{display:false}},y:{ticks:{color:"#71849d",callback:v=>"$"+Number(v).toLocaleString("en-CA")},grid:{color:"#e5edf8"}}}}});}
$("#chartAssetSelect")?.addEventListener("change",e=>{selectedCoin=e.target.value;drawAssetChart()});window.addEventListener("resize",()=>{if(assetChart)assetChart.resize()});
const cadFormatter=new Intl.NumberFormat("en-CA",{style:"currency",currency:"CAD",maximumFractionDigits:2});
async function refreshMarketPrices(){
 const list=$("#assetList"),status=$("#marketStatus");
 if(!list||!status||marketBusy)return;marketBusy=true;
 try{
  const ids=marketCoins.map(c=>c.id).join(",");
  const response=await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(ids)}&vs_currencies=cad`,{cache:"no-store"});
  if(!response.ok)throw new Error(`Market data service returned ${response.status}`);
  const data=await response.json();
  const missing=marketCoins.filter(c=>!data[c.id]||typeof data[c.id].cad!=="number");
  if(missing.length)throw new Error("Some market quotes are unavailable");
  latestMarketPrices=Object.fromEntries(marketCoins.map(c=>[c.id,data[c.id].cad]));
  if(currentClientAssets.length)showAccountBalances();
  list.innerHTML=marketCoins.map(c=>`<div class="asset-row"><div class="coin-icon">${c.icon}</div><div class="coin-meta"><strong>${c.name}</strong><small>${c.symbol}</small></div><div class="coin-value"><strong>${cadFormatter.format(data[c.id].cad)}</strong><small>CAD</small></div></div>`).join("");list.dataset.hasPrices="true";
  const stamp=new Date().toLocaleTimeString(lang==="fr"?"fr-CA":"en-CA",{hour:"2-digit",minute:"2-digit",second:"2-digit"});marketCoins.forEach(c=>{const a=coinHistory[c.id]||(coinHistory[c.id]=[]);a.push({time:stamp,price:data[c.id].cad});if(a.length>120)a.shift()});try{localStorage.setItem("clhd-market-history",JSON.stringify(coinHistory))}catch(_){}drawAssetChart();
  status.textContent=lang==="fr"?"Cours actualisés":"Market quotes refreshed";
  $("#marketUpdated").textContent=new Date().toLocaleTimeString(lang==="fr"?"fr-CA":"en-CA",{hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:"short"});
 }catch(error){
  status.textContent=lang==="fr"?"Données de marché temporairement indisponibles":"Market data temporarily unavailable";
  if(list&&!list.dataset.hasPrices)list.innerHTML=`<div class="market-loading">${lang==="fr"?"Impossible de charger les cours. Réessayez dans un instant.":"Unable to load prices. Please try again shortly."}</div>`;
 }finally{marketBusy=false;}
}
const assetListNode=$("#assetList");
if(assetListNode){refreshMarketPrices();setInterval(refreshMarketPrices,5000);}
