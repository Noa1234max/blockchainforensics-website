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
  heading.textContent=lang==="fr"?"Soldes du compte — valeur indicative en CAD":"Funds of the legal owner — indicative value in CAD";
  el.append(heading);
  const list=document.createElement("div");
  list.className="account-balance-list";
  let totalCad=0, pricedCount=0;
  const logos={
    BTC:'<svg class="asset-logo-img" role="img" aria-label="BTC logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#F7931A"/><path fill="#fff" d="M43.8 27.1c.9-6-3.7-9.2-10-11.3l2-8-4.9-1.2-2 7.8-4-.9 2-7.8L22 4.5l-2 8-10.1-2.5-1.3 5.2 3.8 1c1.7.4 2 1.1 1.8 2.4L8.7 39.1c-.3 1-.9 1.4-2.1 1.1l-3.8-1-2.5 5.6 10 2.5-2 8 4.9 1.2 2-8 4 .9-2 8 4.9 1.2 2-8.1c8.4 1.6 14.7 1 17.3-6.7 2.1-6.2-.1-9.8-4.4-12.1 3.1-.7 5.4-2.8 6-7.6zM34.2 43c-1.5 5.8-11.5 2.7-14.7 1.9l2.6-10.4c3.2.8 13.7 2.3 12.1 8.5zm1.5-16.1c-1.4 5.3-9.7 2.6-12.4 1.9l2.4-9.4c2.7.7 11.5 1.9 10 7.5z" transform="translate(8 2) scale(.78)"/></svg>',
    ETH:'<svg class="asset-logo-img" role="img" aria-label="ETH logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#8C8C8C" d="M32 3 13 33l19 9 19-9z"/><path fill="#343434" d="M32 3v39l19-9z"/><path fill="#B8B8B8" d="m13 37 19 24V46z"/><path fill="#686868" d="M32 46v15l19-24z"/><path fill="#161616" d="m13 33 19 9V3z"/></svg>',
    SOL:'<svg class="asset-logo-img" role="img" aria-label="SOL logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#03E1FF"/></linearGradient><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#DC1FFF"/><stop offset="1" stop-color="#00FFA3"/></linearGradient><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#00FFA3"/><stop offset="1" stop-color="#DC1FFF"/></linearGradient></defs><path fill="url(#g1)" d="M15 12h40L45 23H5z"/><path fill="url(#g2)" d="M19 27h40L45 38H5z"/><path fill="url(#g3)" d="M15 42h40L45 53H5z"/></svg>',
    XRP:'<svg class="asset-logo-img" role="img" aria-label="XRP logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#111820" d="M13 10h8l11 12c5 5 9 5 14 0l11-12h8L49 25c-9 9-25 9-34 0L1 10h12zm0 44H1l14-15c9-9 25-9 34 0l14 15h-8L44 42c-5-5-9-5-14 0L19 54z" transform="translate(0 0)"/></svg>',
    DOGE:'<svg class="asset-logo-img" role="img" aria-label="DOGE logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#C2A633"/><circle cx="32" cy="32" r="25" fill="#E8D17A"/><path fill="#8B6B22" d="M16 25 18 13l12 8 10-3 10 9-3 17-13 9-14-6-7-12z"/><path fill="#F7E8B1" d="m20 25 1-7 8 6 10-3 8 8-3 14-11 7-12-6-5-10z"/><path fill="#fff" d="M24 31a4 4 0 1 0 0-.1zm15 0a4 4 0 1 0 0-.1z"/><circle cx="25" cy="32" r="1.8" fill="#222"/><circle cx="40" cy="32" r="1.8" fill="#222"/><path d="M30 39q3 3 6 0" fill="none" stroke="#49351C" stroke-width="2" stroke-linecap="round"/><path d="m18 23-4-7 10 5m22 1 5-7-1 13" fill="#B28A2D"/></svg>',
    USDC:'<svg class="asset-logo-img" role="img" aria-label="USDC logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#2775CA"/><circle cx="32" cy="32" r="21" fill="none" stroke="#fff" stroke-width="4"/><path d="M32 17v30M24 23c2-3 5-4 8-4 5 0 8 2 8 6 0 4-3 5-8 7s-8 3-8 7 3 6 8 6c4 0 7-1 9-4" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/></svg>',
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
