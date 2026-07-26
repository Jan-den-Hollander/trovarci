/* SpoorNet — © Jan den Hollander */

const STORAGE_KEY = 'spoornet_meldingen';

const CATS = [
  { id:'hoornaar', ic:'🐝', label_nl:'Hoornaar',          label_it:'Calabrone',        radius:1000, color:'#e8a81e' },
  { id:'wolf',     ic:'🐺', label_nl:'Wolf',              label_it:'Lupo',             radius:4000, color:'#8892a6' },
  { id:'huisdier', ic:'🐾', label_nl:'Vermist huisdier',  label_it:'Animale smarrito', radius:500,  color:'#5f9a6f' },
  { id:'anders',   ic:'✱',  label_nl:'Anders',            label_it:'Altro',            radius:800,  color:'#c1543f' }
];

const TR = {
  nl: {
    role_title:'Wat wil je doen?',
    role_sub:'Je kunt dit later altijd wisselen via de tabbladen onderin.',
    role_zender_title:'📍 Ik meld een waarneming',
    role_zender_sub:"Leg een locatie vast en deel 'm met wie de meldingen verzamelt.",
    role_ontvanger_title:'🗺️ Ik verzamel meldingen',
    role_ontvanger_sub:'Bouw een verzamelkaart op van meldingen die je ontvangt, en stuur die door.',
    melden_titel:'Melding maken',
    melden_cat_label:'Wat heb je gezien?',
    anders_placeholder:'Beschrijf wat je gezien hebt...',
    locatie_label:'Locatie',
    locatie_geen:'Nog geen locatie vastgelegd',
    locatie_bezig:'Locatie ophalen...',
    locatie_ok:'Locatie vastgelegd',
    locatie_fout:'Kon locatie niet bepalen',
    locatie_ophalen:'Locatie ophalen',
    richting_label:'Vliegrichting / looprichting (optioneel)',
    richting_hint:'Sleep de pijl in de richting waarin het dier wegvloog of -liep. Dit helpt bij het triangeren van het zoekgebied.',
    richting_reset:'Wissen',
    foto_label:'Foto (optioneel)',
    foto_toevoegen:'Foto toevoegen',
    foto_verwijderen:'Verwijderen',
    verzenden_knop:'Deel melding',
    verzenden_hint:'Verstuur het linkje naar wie de meldingen verzamelt — via WhatsApp, Telegram, Signal of sms.',
    kaart_titel:'Verzamelkaart',
    kaart_cirkels:'Toon zoekgebied-cirkels',
    kaart_lijst:'Meldingen',
    kaart_export_kopieer:'Kopieer samenvatting',
    kaart_export_csv:'Exporteer CSV',
    kaart_wis:'Wis alle meldingen',
    kaart_leeg_titel:'Nog geen meldingen ontvangen',
    kaart_leeg_sub:'Zodra je een gedeeld linkje opent, verschijnt de melding hier.',
    info_titel:'Over SpoorNet',
    info_werking_titel:'Hoe het werkt',
    info_werking_tekst:'Meld een waarneming met locatie, en deel het linkje met wie de meldingen coördineert. Meerdere meldingen samen bakenen een zoekgebied af — net als bij de bekende triangulatiemethode die imkers gebruiken om hoornaarnesten op te sporen.',
    info_privacy_titel:'Privacy',
    info_privacy_tekst:'SpoorNet gebruikt geen server: alle meldingen worden als linkje gedeeld en lokaal op het toestel van de ontvanger opgeslagen. Er wordt niets naar derden verstuurd, behalve wat je zelf deelt.',
    info_categorie_titel:'Categorieën',
    info_categorie_tekst:'Aziatische hoornaar en wolf zijn wildlife-waarnemingen die relevante instanties kunnen helpen. Vermist huisdier is bedoeld om samen een zoekgebied rond een laatst geziene plek af te bakenen. Gebruik "Anders" voor eigen doeleinden.',
    info_let_op_titel:'Let op',
    info_let_op_tekst:'Deze app is niet bedoeld voor vermiste personen. Gebruik daarvoor altijd de officiële kanalen zoals 112 of Burgernet.',
    tab_melden:'Melden',
    tab_kaart:'Verzamelkaart',
    tab_info:'Info',
    toast_toegevoegd:'Melding toegevoegd aan je verzamelkaart',
    toast_gekopieerd_link:'Link gekopieerd',
    toast_samenvatting_gekopieerd:'Samenvatting gekopieerd',
    toast_geen_meldingen:'Nog geen meldingen om te delen',
    toast_gewist:'Alle meldingen gewist',
    toast_foto_te_groot:'Foto was te groot voor het linkje en is weggelaten — link gekopieerd',
    toast_deel_mislukt:'Delen is niet gelukt op dit toestel',
    confirm_wis:'Weet je zeker dat je alle meldingen wilt wissen? Dit kan niet ongedaan worden gemaakt.',
    deel_tekst_prefix:'Nieuwe waarneming via SpoorNet:',
    samenvatting_prefix:'Verzamelde meldingen via SpoorNet:',
    richting_woord:'richting'
  },
  it: {
    role_title:'Cosa vuoi fare?',
    role_sub:'Puoi sempre cambiare in seguito tramite le schede in basso.',
    role_zender_title:'📍 Segnalo un avvistamento',
    role_zender_sub:'Registra una posizione e condividila con chi raccoglie le segnalazioni.',
    role_ontvanger_title:'🗺️ Raccolgo le segnalazioni',
    role_ontvanger_sub:'Costruisci una mappa con le segnalazioni ricevute e inoltrale.',
    melden_titel:'Nuova segnalazione',
    melden_cat_label:'Cosa hai visto?',
    anders_placeholder:'Descrivi cosa hai visto...',
    locatie_label:'Posizione',
    locatie_geen:'Nessuna posizione registrata',
    locatie_bezig:'Rilevamento posizione...',
    locatie_ok:'Posizione registrata',
    locatie_fout:'Impossibile rilevare la posizione',
    locatie_ophalen:'Rileva posizione',
    richting_label:'Direzione di volo / di fuga (opzionale)',
    richting_hint:"Trascina la freccia nella direzione in cui l'animale è volato o fuggito. Aiuta a triangolare l'area di ricerca.",
    richting_reset:'Cancella',
    foto_label:'Foto (opzionale)',
    foto_toevoegen:'Aggiungi foto',
    foto_verwijderen:'Rimuovi',
    verzenden_knop:'Condividi segnalazione',
    verzenden_hint:'Invia il link a chi raccoglie le segnalazioni — via WhatsApp, Telegram, Signal o SMS.',
    kaart_titel:'Mappa raccolta',
    kaart_cirkels:"Mostra cerchi dell'area di ricerca",
    kaart_lijst:'Segnalazioni',
    kaart_export_kopieer:'Copia riepilogo',
    kaart_export_csv:'Esporta CSV',
    kaart_wis:'Cancella tutte le segnalazioni',
    kaart_leeg_titel:'Nessuna segnalazione ricevuta',
    kaart_leeg_sub:'Non appena apri un link condiviso, la segnalazione apparirà qui.',
    info_titel:'Info su SpoorNet',
    info_werking_titel:'Come funziona',
    info_werking_tekst:"Segnala un avvistamento con posizione e condividi il link con chi coordina le segnalazioni. Più segnalazioni insieme delimitano un'area di ricerca — come nel metodo di triangolazione usato dagli apicoltori per individuare i nidi di calabrone.",
    info_privacy_titel:'Privacy',
    info_privacy_tekst:'SpoorNet non usa un server: le segnalazioni vengono condivise come link e salvate localmente sul dispositivo di chi le riceve. Nulla viene inviato a terzi, se non ciò che condividi tu stesso.',
    info_categorie_titel:'Categorie',
    info_categorie_tekst:'Calabrone asiatico e lupo sono avvistamenti di fauna utili per gli enti competenti. Animale smarrito serve per delimitare insieme un\'area di ricerca attorno all\'ultimo avvistamento. Usa "Altro" per scopi personali.',
    info_let_op_titel:'Attenzione',
    info_let_op_tekst:'Questa app non è pensata per persone scomparse. Per questo usa sempre i canali ufficiali come il 112.',
    tab_melden:'Segnala',
    tab_kaart:'Mappa',
    tab_info:'Info',
    toast_toegevoegd:'Segnalazione aggiunta alla mappa',
    toast_gekopieerd_link:'Link copiato',
    toast_samenvatting_gekopieerd:'Riepilogo copiato',
    toast_geen_meldingen:'Nessuna segnalazione da condividere',
    toast_gewist:'Tutte le segnalazioni cancellate',
    toast_foto_te_groot:"La foto era troppo grande per il link ed è stata omessa — link copiato",
    toast_deel_mislukt:'Condivisione non riuscita su questo dispositivo',
    confirm_wis:'Vuoi davvero cancellare tutte le segnalazioni? Non si può annullare.',
    deel_tekst_prefix:'Nuovo avvistamento via SpoorNet:',
    samenvatting_prefix:'Segnalazioni raccolte via SpoorNet:',
    richting_woord:'direzione'
  }
};

let lang = 'nl';
let huidigeCat = null;
let huidigeLocatie = null;
let richtingGraden = null;
let huidigeFoto = null;
let mapInstance = null;
let markerLayer = null;
let tilesAdded = false;

/* ---------- init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  lang = localStorage.getItem('spoornet_lang') || 'nl';
  setLang(lang);
  wireCompass();
  const andersTekst = document.getElementById('anders-tekst');
  if (andersTekst) andersTekst.addEventListener('input', updateVerzendKnop);
  initView();
  registerSW();
});

function initView() {
  const incoming = parseIncomingHash();
  const savedRole = localStorage.getItem('spoornet_role');
  if (incoming) {
    handleIncoming(incoming);
    onthulTabs();
    gaNaar('kaart');
    return;
  }
  if (savedRole) {
    onthulTabs();
    gaNaar(savedRole === 'zender' ? 'melden' : 'kaart');
  } else {
    document.querySelector('nav.tabs').classList.add('hidden');
  }
}

function onthulTabs() {
  document.getElementById('view-role').classList.add('hidden');
  document.querySelector('nav.tabs').classList.remove('hidden');
  const swBtn = document.getElementById('switch-view-btn');
  if (swBtn) swBtn.classList.remove('hidden');
}

let huidigeView = 'melden';

function wisselView() {
  huidigeView = huidigeView === 'kaart' ? 'melden' : 'kaart';
  gaNaar(huidigeView);
}

function chooseRole(role) {
  localStorage.setItem('spoornet_role', role);
  onthulTabs();
  gaNaar(role === 'zender' ? 'melden' : 'kaart');
}

function gaNaar(view) {
  if (view === 'melden' || view === 'kaart') huidigeView = view;
  ['melden', 'kaart', 'info'].forEach(v => {
    const sectie = document.getElementById('view-' + v);
    if (sectie) sectie.classList.toggle('hidden', v !== view);
    const tab = document.getElementById('tab-' + v);
    if (tab) tab.classList.toggle('active', v === view);
  });
  if (view === 'kaart') {
    setTimeout(() => {
      tekenKaart();
      renderLijst();
      if (mapInstance) mapInstance.invalidateSize();
    }, 50);
  }
}

/* ---------- taal ---------- */
function setLang(l) {
  lang = l;
  localStorage.setItem('spoornet_lang', l);
  document.documentElement.lang = l;
  document.getElementById('lang-nl').classList.toggle('active', l === 'nl');
  document.getElementById('lang-it').classList.toggle('active', l === 'it');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TR[l][key]) el.textContent = TR[l][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TR[l][key]) el.placeholder = TR[l][key];
  });
  if (!huidigeLocatie) {
    const t = document.getElementById('loc-text');
    if (t) t.textContent = TR[l].locatie_geen;
  }
  renderCatGrid();
  renderLijst();
  if (mapInstance) tekenKaart();
}

function catLabel(cat) {
  return lang === 'it' ? cat.label_it : cat.label_nl;
}

/* ---------- categorie ---------- */
function renderCatGrid() {
  const grid = document.getElementById('cat-grid');
  if (!grid) return;
  grid.innerHTML = '';
  CATS.forEach(cat => {
    const btn = document.createElement('div');
    btn.className = 'cat-btn' + (huidigeCat === cat.id ? ' active' : '');
    btn.onclick = () => kiesCategorie(cat.id);
    btn.innerHTML = `<span class="ic">${cat.ic}</span><span>${catLabel(cat)}</span>`;
    grid.appendChild(btn);
  });
}

function kiesCategorie(id) {
  huidigeCat = id;
  renderCatGrid();
  document.getElementById('anders-field').classList.toggle('hidden', id !== 'anders');
  updateVerzendKnop();
}

function updateVerzendKnop() {
  const btn = document.getElementById('verzend-btn');
  if (!btn) return;
  const andersTekst = document.getElementById('anders-tekst');
  const geldig = huidigeCat && huidigeLocatie &&
    (huidigeCat !== 'anders' || (andersTekst && andersTekst.value.trim().length > 0));
  btn.disabled = !geldig;
}

/* ---------- locatie ---------- */
function ophalenLocatie() {
  const dot = document.getElementById('loc-dot');
  const txt = document.getElementById('loc-text');
  dot.className = 'dot';
  txt.textContent = TR[lang].locatie_bezig;
  if (!navigator.geolocation) {
    dot.className = 'dot err';
    txt.textContent = TR[lang].locatie_fout;
    return;
  }
  navigator.geolocation.getCurrentPosition(pos => {
    huidigeLocatie = { lat: pos.coords.latitude, lon: pos.coords.longitude };
    dot.className = 'dot ok';
    txt.textContent = TR[lang].locatie_ok + ' · ' + huidigeLocatie.lat.toFixed(5) + ', ' + huidigeLocatie.lon.toFixed(5);
    updateVerzendKnop();
  }, () => {
    dot.className = 'dot err';
    txt.textContent = TR[lang].locatie_fout;
  }, { enableHighAccuracy: true, timeout: 15000 });
}

/* ---------- kompas ---------- */
function wireCompass() {
  const compassEl = document.getElementById('compass');
  if (!compassEl) return;
  let dragging = false;
  const naarGraden = e => {
    const rect = compassEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx, dy = e.clientY - cy;
    let deg = Math.atan2(dx, -dy) * 180 / Math.PI;
    if (deg < 0) deg += 360;
    return deg;
  };
  compassEl.addEventListener('pointerdown', e => {
    dragging = true;
    compassEl.setPointerCapture(e.pointerId);
    setRichting(naarGraden(e));
  });
  compassEl.addEventListener('pointermove', e => { if (dragging) setRichting(naarGraden(e)); });
  compassEl.addEventListener('pointerup', () => { dragging = false; });
  compassEl.addEventListener('pointercancel', () => { dragging = false; });
}

function setRichting(deg) {
  richtingGraden = Math.round(deg);
  document.getElementById('needle').style.transform = `translate(-50%,-100%) rotate(${richtingGraden}deg)`;
  document.getElementById('compass-deg').textContent = richtingGraden + '°';
}

function wisRichting() {
  richtingGraden = null;
  const needle = document.getElementById('needle');
  if (needle) needle.style.transform = 'translate(-50%,-100%) rotate(0deg)';
  const deg = document.getElementById('compass-deg');
  if (deg) deg.textContent = '—';
}

/* ---------- foto ---------- */
function fotoGekozen(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      const maxW = 180;
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement('canvas');
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      huidigeFoto = canvas.toDataURL('image/jpeg', 0.4);
      const prev = document.getElementById('foto-preview');
      prev.src = huidigeFoto;
      prev.classList.remove('hidden');
      document.getElementById('foto-verwijder').classList.remove('hidden');
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function verwijderFoto() {
  huidigeFoto = null;
  const prev = document.getElementById('foto-preview');
  if (prev) prev.classList.add('hidden');
  const btn = document.getElementById('foto-verwijder');
  if (btn) btn.classList.add('hidden');
  const input = document.getElementById('foto-input');
  if (input) input.value = '';
}

/* ---------- versturen ---------- */
const MAX_URL_LENGTE = 1800; // ruime marge voor berichten-apps en de Web Share API

function bouwMeldingUrl(melding) {
  const payload = encodeURIComponent(JSON.stringify(melding));
  return location.origin + location.pathname + '#m=' + payload;
}

function verstuurMelding() {
  if (!huidigeCat || !huidigeLocatie) return;
  const andersTekst = document.getElementById('anders-tekst');
  const melding = {
    id: 'm' + Date.now() + Math.floor(Math.random() * 1000),
    cat: huidigeCat,
    tekst: huidigeCat === 'anders' && andersTekst ? andersTekst.value.trim() : '',
    lat: huidigeLocatie.lat,
    lon: huidigeLocatie.lon,
    richting: richtingGraden,
    tijd: new Date().toISOString(),
    foto: huidigeFoto
  };

  let url = bouwMeldingUrl(melding);
  let fotoLatenVallen = false;
  if (url.length > MAX_URL_LENGTE && melding.foto) {
    melding.foto = null;
    url = bouwMeldingUrl(melding);
    fotoLatenVallen = true;
  }

  const catInfo = CATS.find(c => c.id === huidigeCat);
  const deelTekst = TR[lang].deel_tekst_prefix + ' ' + catLabel(catInfo);

  const kopieerFallback = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(
        () => toon(fotoLatenVallen ? TR[lang].toast_foto_te_groot : TR[lang].toast_gekopieerd_link),
        () => toon(TR[lang].toast_deel_mislukt)
      );
    } else {
      toon(TR[lang].toast_deel_mislukt);
    }
  };

  if (navigator.share) {
    navigator.share({ title: 'SpoorNet', text: deelTekst, url })
      .then(() => { if (fotoLatenVallen) toon(TR[lang].toast_foto_te_groot); })
      .catch(() => kopieerFallback());
  } else {
    kopieerFallback();
  }
  resetMeldForm();
}

function resetMeldForm() {
  huidigeCat = null;
  huidigeLocatie = null;
  richtingGraden = null;
  huidigeFoto = null;
  const andersTekst = document.getElementById('anders-tekst');
  if (andersTekst) andersTekst.value = '';
  verwijderFoto();
  wisRichting();
  const dot = document.getElementById('loc-dot');
  const txt = document.getElementById('loc-text');
  if (dot) dot.className = 'dot';
  if (txt) txt.textContent = TR[lang].locatie_geen;
  document.getElementById('anders-field').classList.add('hidden');
  renderCatGrid();
  updateVerzendKnop();
}

/* ---------- ontvangen ---------- */
function parseIncomingHash() {
  if (location.hash.startsWith('#m=')) {
    try {
      const json = decodeURIComponent(location.hash.slice(3));
      const data = JSON.parse(json);
      history.replaceState(null, '', location.pathname);
      return data;
    } catch (e) { return null; }
  }
  return null;
}

function handleIncoming(melding) {
  const lijst = laadMeldingen();
  if (!lijst.find(m => m.id === melding.id)) {
    lijst.push(melding);
    bewaarMeldingen(lijst);
  }
  toon(TR[lang].toast_toegevoegd);
}

/* ---------- opslag ---------- */
function laadMeldingen() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch (e) { return []; }
}
function bewaarMeldingen(lijst) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lijst));
}

/* ---------- geodesie ---------- */
function destPoint(lat, lon, bearingDeg, distM) {
  const R = 6371000;
  const brng = bearingDeg * Math.PI / 180;
  const lat1 = lat * Math.PI / 180, lon1 = lon * Math.PI / 180;
  const lat2 = Math.asin(Math.sin(lat1) * Math.cos(distM / R) + Math.cos(lat1) * Math.sin(distM / R) * Math.cos(brng));
  const lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(distM / R) * Math.cos(lat1), Math.cos(distM / R) - Math.sin(lat1) * Math.sin(lat2));
  return [lat2 * 180 / Math.PI, lon2 * 180 / Math.PI];
}

/* ---------- kaart ---------- */
function tekenKaart() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  const lijst = laadMeldingen();
  const showCirkels = document.getElementById('cirkels-toggle').checked;

  if (!mapInstance) {
    mapInstance = L.map('map');
  }
  if (!tilesAdded) {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(mapInstance);
    tilesAdded = true;
  }
  if (markerLayer) mapInstance.removeLayer(markerLayer);
  markerLayer = L.layerGroup().addTo(mapInstance);

  if (lijst.length === 0) {
    mapInstance.setView([52.1, 5.3], 7); // NL overzicht als startpunt
    return;
  }

  const bounds = [];
  lijst.forEach(m => {
    const cat = CATS.find(c => c.id === m.cat) || CATS[3];
    const marker = L.circleMarker([m.lat, m.lon], {
      radius: 8, color: cat.color, fillColor: cat.color, fillOpacity: 0.85, weight: 2
    }).addTo(markerLayer);
    const tijd = new Date(m.tijd).toLocaleString(lang === 'it' ? 'it-IT' : 'nl-NL');
    const naam = m.cat === 'anders' && m.tekst ? esc(m.tekst) : catLabel(cat);
    let popup = `<b>${cat.ic} ${naam}</b><br>${tijd}`;
    if (m.richting !== null && m.richting !== undefined) {
      popup += `<br>${TR[lang].richting_woord}: ${m.richting}°`;
    }
    if (m.foto) popup += `<br><img src="${m.foto}" style="width:100%;border-radius:6px;margin-top:6px;">`;
    marker.bindPopup(popup);
    bounds.push([m.lat, m.lon]);

    if (showCirkels) {
      L.circle([m.lat, m.lon], { radius: cat.radius, color: cat.color, weight: 1, fillOpacity: 0.06 }).addTo(markerLayer);
    }
    if (m.richting !== null && m.richting !== undefined) {
      const eind = destPoint(m.lat, m.lon, m.richting, cat.radius * 1.3);
      L.polyline([[m.lat, m.lon], eind], { color: cat.color, weight: 2, dashArray: '5,6' }).addTo(markerLayer);
    }
  });
  mapInstance.fitBounds(bounds, { padding: [30, 30], maxZoom: 15 });
}

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

/* ---------- lijst ---------- */
function renderLijst() {
  const container = document.getElementById('meld-lijst');
  if (!container) return;
  const lijst = laadMeldingen().slice().sort((a, b) => new Date(b.tijd) - new Date(a.tijd));
  if (lijst.length === 0) {
    container.innerHTML = `<div class="empty-state"><span class="ic">🗺️</span>${TR[lang].kaart_leeg_titel}<br><span style="font-size:.8rem;">${TR[lang].kaart_leeg_sub}</span></div>`;
    return;
  }
  container.innerHTML = '';
  lijst.forEach(m => {
    const cat = CATS.find(c => c.id === m.cat) || CATS[3];
    const tijd = new Date(m.tijd).toLocaleString(lang === 'it' ? 'it-IT' : 'nl-NL');
    const naam = m.cat === 'anders' && m.tekst ? esc(m.tekst) : catLabel(cat);
    const richting = (m.richting !== null && m.richting !== undefined) ? ` · ${m.richting}°` : '';
    const row = document.createElement('div');
    row.className = 'meld-item';
    row.innerHTML = `
      <span class="meld-ic">${cat.ic}</span>
      <div style="flex:1;">
        <div class="meld-title">${naam}</div>
        <div class="meld-meta">${tijd}${richting} · ${m.lat.toFixed(4)}, ${m.lon.toFixed(4)}</div>
      </div>
      <button class="secondary" style="width:auto;padding:.3em .6em;" onclick="verwijderMelding('${m.id}')">✕</button>
    `;
    container.appendChild(row);
  });
}

function verwijderMelding(id) {
  bewaarMeldingen(laadMeldingen().filter(m => m.id !== id));
  tekenKaart();
  renderLijst();
}

/* ---------- export ---------- */
function kopieerSamenvatting() {
  const lijst = laadMeldingen();
  if (lijst.length === 0) { toon(TR[lang].toast_geen_meldingen); return; }
  const regels = lijst.map(m => {
    const cat = CATS.find(c => c.id === m.cat) || CATS[3];
    const naam = m.cat === 'anders' && m.tekst ? `${catLabel(cat)}: ${m.tekst}` : catLabel(cat);
    const tijd = new Date(m.tijd).toLocaleString(lang === 'it' ? 'it-IT' : 'nl-NL');
    const richting = (m.richting !== null && m.richting !== undefined) ? ` — ${TR[lang].richting_woord}: ${m.richting}°` : '';
    const mapsLink = `https://maps.google.com/?q=${m.lat},${m.lon}`;
    return `• ${naam} — ${tijd}${richting}\n  ${mapsLink}`;
  });
  const tekst = TR[lang].samenvatting_prefix + '\n\n' + regels.join('\n\n');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(tekst).then(() => toon(TR[lang].toast_samenvatting_gekopieerd));
  }
}

function exporteerCsv() {
  const lijst = laadMeldingen();
  if (lijst.length === 0) { toon(TR[lang].toast_geen_meldingen); return; }
  const header = ['categorie', 'tekst', 'lat', 'lon', 'richting_graden', 'tijd'];
  const rows = lijst.map(m => [m.cat, (m.tekst || '').replace(/"/g, '""'), m.lat, m.lon, (m.richting ?? ''), m.tijd]);
  const csv = [header.join(',')].concat(rows.map(r => r.map(v => `"${v}"`).join(','))).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'spoornet-meldingen.csv';
  a.click();
}

function wisAlleMeldingen() {
  if (confirm(TR[lang].confirm_wis)) {
    localStorage.removeItem(STORAGE_KEY);
    tekenKaart();
    renderLijst();
    toon(TR[lang].toast_gewist);
  }
}

/* ---------- toast ---------- */
function toon(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- pwa ---------- */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

/* ---------- copyright integriteit ---------- */
(function () {
  const REQUIRED_TEXT = '© Jan den Hollander';
  function blockApp() {
    document.documentElement.innerHTML =
      '<body style="background:#111412;color:#eee9df;font-family:monospace;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;padding:2em;">' +
      'SpoorNet is auteursrechtelijk beschermd werk van Jan den Hollander. Integriteitscontrole mislukt.</body>';
  }
  function check() {
    const el = document.getElementById('copyright-footer');
    if (!el || !el.textContent.includes(REQUIRED_TEXT)) blockApp();
  }
  window.addEventListener('load', () => {
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });
  });
})();
