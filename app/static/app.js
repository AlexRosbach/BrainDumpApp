'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const TRANS = {
  de: {
    appTitle: 'Brain Dump',
    greetingEvening: 'Guten Abend',
    greetingMorning: 'Guten Morgen',
    greetingNeutral: 'Hallo',

    modeSelectorTitle: 'Was möchtest du tun?',
    modeEveningTitle: 'Abend-Checkout',
    modeEveningDesc: 'Tagesabschluss · Reflexion · Planung',
    modeMorningTitle: 'Morgen-Checkin',
    modeMorningDesc: 'Absichten prüfen · Den Tag starten',

    progressLabels: ['Stimmung', 'Gedanken', 'Erfolge', 'Aufgaben', 'Intention'],

    step1Title: 'Wie war dein Tag?',
    step1Desc: 'Wähle deine aktuelle Stimmung',
    moodLabels: ['Schlecht', 'Mäßig', 'Okay', 'Gut', 'Toll'],

    step2Title: 'Was geht dir noch durch den Kopf?',
    step2Desc: 'Schreib alles raus — ohne Filter',
    step2Placeholder: 'Lass alle Gedanken hier raus…',

    step3Title: 'Was lief heute gut?',
    step3Desc: 'Mindestens ein Erfolg des Tages',
    step3Placeholder: 'Erfolg hinzufügen und Enter drücken…',
    step3AddBtn: 'Hinzufügen',
    step3MinError: 'Bitte trage mindestens einen Erfolg ein.',

    step4Title: 'Top 3 Aufgaben für morgen',
    step4Desc: 'Maximal 3 wichtige Aufgaben für morgen',
    step4Placeholder: 'Aufgabe eingeben…',
    step4AddBtn: 'Hinzufügen',
    step4MaxError: 'Maximal 3 Aufgaben erlaubt.',
    step4EmptyError: 'Bitte gib mindestens eine Aufgabe ein.',

    step5Title: 'Meine Intention für morgen',
    step5Desc: 'Ein Satz, der deinen Tag ausrichtet',
    step5Placeholder: 'Morgen möchte ich mich auf … fokussieren.',

    btnNext: 'Weiter →',
    btnBack: '← Zurück',
    btnFinish: 'Abschließen ✓',

    eveningCompleteTitle: 'Gut gemacht!',
    eveningCompleteText: 'Dein Abend-Checkout wurde gespeichert. Morgen geht\'s weiter!',
    btnNewSession: 'Neu starten',

    btnExportExcel: '📊 Als Excel exportieren',
    btnExportExcelMorning: '📊 Excel mit Checkin aktualisieren',
    btnExportMarkdown: '📋 Als Markdown kopieren',

    morningTitle: 'Guten Morgen!',
    morningIntentionSection: 'Deine Intention von gestern',
    morningTasksSection: 'Aufgaben von gestern',
    morningNoTasks: 'Keine Aufgaben von gestern.',
    morningMoodSection: 'Wie startest du in den Tag?',
    morningNoteSection: 'Worauf möchtest du dich heute fokussieren?',
    morningNotePlaceholder: 'Was ist heute besonders wichtig für dich?',
    btnSaveMorning: 'Checkin speichern ✓',

    noYesterdayTitle: 'Kein gestriger Eintrag',
    noYesterdayText: 'Es wurde kein Abend-Checkout von gestern gefunden.',
    btnContinueAnyway: 'Trotzdem fortfahren',
    btnGoToEvening: 'Zum Abend-Checkout',

    morningCompleteTitle: 'Guten Start!',
    morningCompleteText: 'Dein Morgen-Checkin wurde gespeichert. Viel Erfolg heute!',

    mdModalTitle: 'Markdown für Joplin',
    btnCopyMd: 'In Zwischenablage kopieren',
    btnCopied: '✓ Kopiert!',
    btnCloseMd: 'Schließen',

    langToggleLabel: 'EN',
    exportSuccess: '✓ Exportiert!',
    exportError: 'Fehler beim Export.',
    saveFailed: 'Speichern fehlgeschlagen. Bitte prüfe deine Verbindung.',
    selectMoodHint: 'Bitte wähle eine Stimmung aus.',

    // Landing page
    landingTagline: 'Deine tägliche Reflexionsroutine',
    landingDesc: 'Eine strukturierte Routine für Abend und Morgen. Gedanken ablegen, Erfolge festhalten, Prioritäten setzen und fokussiert in den neuen Tag starten.',
    landingEveningTitle: 'Abend-Checkout',
    landingEveningDesc: '5 Schritte durch den Tagesabschluss: Stimmung, Gedanken, Erfolge, Aufgaben und eine Intention für morgen.',
    landingMorningTitle: 'Morgen-Checkin',
    landingMorningDesc: 'Gestrige Intention prüfen, Aufgaben abhaken und mit einem klaren Fokus in den Tag starten.',
    landingDataNote: 'Es wird nichts dauerhaft gespeichert. Daten liegen nur fluechtig im laufenden Container und starten nach jedem Neustart leer.',
    landingGithub: 'GitHub ↗',
    landingCta: 'App öffnen →',

    // Excel import
    importHint: 'Kein gestriger Eintrag vorhanden? Lade eine Brain-Dump-Excel-Datei hoch, um den Morgen-Checkin vorzubelegen.',
    btnImportExcel: '📥 Excel importieren',
    importSuccess: '✓ Daten importiert!',
    importError: 'Import fehlgeschlagen. Bitte prüfe das Dateiformat.',
    importedFrom: 'Importiert vom',
  },
  en: {
    appTitle: 'Brain Dump',
    greetingEvening: 'Good Evening',
    greetingMorning: 'Good Morning',
    greetingNeutral: 'Hello',

    modeSelectorTitle: 'What would you like to do?',
    modeEveningTitle: 'Evening Check-out',
    modeEveningDesc: 'Daily close · Reflection · Planning',
    modeMorningTitle: 'Morning Check-in',
    modeMorningDesc: 'Review intentions · Start the day',

    progressLabels: ['Mood', 'Thoughts', 'Wins', 'Tasks', 'Intention'],

    step1Title: 'How was your day?',
    step1Desc: 'Select your current mood',
    moodLabels: ['Bad', 'Meh', 'Okay', 'Good', 'Great'],

    step2Title: "What's still on your mind?",
    step2Desc: 'Write it all out — no filter',
    step2Placeholder: 'Let all your thoughts out here…',

    step3Title: 'What went well today?',
    step3Desc: 'At least one win from the day',
    step3Placeholder: 'Add a win and press Enter…',
    step3AddBtn: 'Add',
    step3MinError: 'Please add at least one win.',

    step4Title: 'Top 3 tasks for tomorrow',
    step4Desc: 'Maximum 3 important tasks for tomorrow',
    step4Placeholder: 'Enter a task…',
    step4AddBtn: 'Add',
    step4MaxError: 'Maximum 3 tasks allowed.',
    step4EmptyError: 'Please add at least one task.',

    step5Title: 'My intention for tomorrow',
    step5Desc: 'One sentence that sets the direction for your day',
    step5Placeholder: 'Tomorrow I want to focus on…',

    btnNext: 'Next →',
    btnBack: '← Back',
    btnFinish: 'Finish ✓',

    eveningCompleteTitle: 'Well done!',
    eveningCompleteText: 'Your evening check-out has been saved. See you tomorrow!',
    btnNewSession: 'Start over',

    btnExportExcel: '📊 Export as Excel',
    btnExportExcelMorning: '📊 Update Excel with Check-in',
    btnExportMarkdown: '📋 Copy as Markdown',

    morningTitle: 'Good Morning!',
    morningIntentionSection: 'Your intention from yesterday',
    morningTasksSection: "Yesterday's tasks",
    morningNoTasks: 'No tasks from yesterday.',
    morningMoodSection: 'How are you starting the day?',
    morningNoteSection: 'What else do you want to focus on today?',
    morningNotePlaceholder: 'What is especially important for you today?',
    btnSaveMorning: 'Save Check-in ✓',

    noYesterdayTitle: 'No yesterday entry',
    noYesterdayText: 'No evening check-out from yesterday was found.',
    btnContinueAnyway: 'Continue anyway',
    btnGoToEvening: 'Go to Evening Check-out',

    morningCompleteTitle: 'Great start!',
    morningCompleteText: 'Your morning check-in has been saved. Have a great day!',

    mdModalTitle: 'Markdown for Joplin',
    btnCopyMd: 'Copy to Clipboard',
    btnCopied: '✓ Copied!',
    btnCloseMd: 'Close',

    langToggleLabel: 'DE',
    exportSuccess: '✓ Exported!',
    exportError: 'Export failed.',
    saveFailed: 'Saving failed. Please check your connection.',
    selectMoodHint: 'Please select a mood.',

    // Landing page
    landingTagline: 'Your daily reflection routine',
    landingDesc: 'A structured routine for evening and morning. Clear your head, capture wins, set priorities — and start the next day with focus.',
    landingEveningTitle: 'Evening Check-out',
    landingEveningDesc: '5 guided steps to close out the day: mood, thoughts, wins, tasks, and an intention for tomorrow.',
    landingMorningTitle: 'Morning Check-in',
    landingMorningDesc: 'Review yesterday\'s intention, check off tasks, and start the day with a clear focus.',
    landingDataNote: 'Nothing is stored permanently. Data exists only in volatile runtime storage and starts empty after each restart.',
    landingGithub: 'GitHub ↗',
    landingCta: 'Open App →',

    // Excel import
    importHint: 'No entry from yesterday? Upload a Brain Dump Excel file to prefill the morning check-in.',
    btnImportExcel: '📥 Import Excel',
    importSuccess: '✓ Data imported!',
    importError: 'Import failed. Please check the file format.',
    importedFrom: 'Imported from',
  },
};

/* ============================================================
   CONSTANTS
   ============================================================ */
const MOOD_EMOJIS = ['😞', '😕', '😐', '🙂', '😄'];

/* ============================================================
   STATE
   ============================================================ */
const state = {
  lang: localStorage.getItem('bd_lang') || 'de',
  theme: localStorage.getItem('bd_theme') || 'dark',
  mode: null,   // 'landing' | 'evening' | 'evening-complete' | 'morning' | 'morning-no-session' | 'morning-complete'
  step: 1,

  eveningData: {
    mood: null,
    brain_dump: '',
    wins: [],
    tasks: [],
    intention: '',
  },

  morningTasks: [],
  morningMood: null,
  morningNote: '',

  yesterdaySession: null,
  todayStr: '',
  yesterdayStr: '',
  appVersion: '0.0.0',
};

/* ============================================================
   HELPERS
   ============================================================ */
function t(key) {
  return TRANS[state.lang][key] ?? key;
}

function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getApp() {
  return document.getElementById('app');
}

function setApp(html) {
  getApp().innerHTML = html;
}

function localDateStr(d) {
  const y  = d.getFullYear();
  const m  = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${dd}`;
}

function getTodayStr() {
  return localDateStr(new Date());
}

function getYesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return localDateStr(d);
}

function getCurrentHour() {
  return new Date().getHours();
}

function getAppVersion() {
  const meta = document.querySelector('meta[name="app-version"]');
  return (meta && meta.content ? meta.content.trim() : '') || '0.0.0';
}

function showToast(msg, type = 'success') {
  document.querySelectorAll('.toast').forEach(el => el.remove());
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.classList.add('show'), 10);
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 300);
  }, 2600);
}

/* ============================================================
   THEME & LANG
   ============================================================ */
function applyTheme(theme) {
  state.theme = theme;
  localStorage.setItem('bd_theme', theme);
  // CSS default is dark; 'light' class switches to light mode
  document.body.classList.toggle('light', theme === 'light');
  document.getElementById('theme-btn').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

function applyLang(lang) {
  state.lang = lang;
  localStorage.setItem('bd_lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('lang-btn').textContent = t('langToggleLabel');
  document.getElementById('header-title').textContent = t('appTitle');
  renderCurrentScreen();
}

function toggleLang() {
  applyLang(state.lang === 'de' ? 'en' : 'de');
}

/* ============================================================
   API
   ============================================================ */
async function apiLoadSession(dateStr) {
  try {
    const res = await fetch(`/api/session/${dateStr}`);
    if (res.ok) return await res.json();
  } catch (e) {
    console.error('Load session failed', e);
  }
  return null;
}

async function apiSaveSession(dateStr, data) {
  try {
    const res = await fetch(`/api/session/${dateStr}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.error('Save session failed', e);
    return null;
  }
}

async function apiExportExcel(dateStr) {
  try {
    const res = await fetch(`/api/export/excel/${dateStr}`, { method: 'POST' });
    if (res.ok) {
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'brain_dump_log.xlsx';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      return true;
    }
  } catch (e) {
    console.error('Excel export failed', e);
  }
  return false;
}

async function apiGetMarkdown(dateStr) {
  try {
    const res = await fetch(`/api/export/markdown/${dateStr}`);
    if (res.ok) {
      const data = await res.json();
      return data.markdown;
    }
  } catch (e) {
    console.error('Markdown export failed', e);
  }
  return null;
}

/* ============================================================
   RENDER HELPERS
   ============================================================ */
function renderMoodPicker(selected, callbackFn) {
  const labels = t('moodLabels');
  return `<div class="mood-picker">${MOOD_EMOJIS.map((emoji, i) => `
    <button class="mood-btn${selected === i + 1 ? ' selected' : ''}"
            onclick="${callbackFn}(${i + 1})"
            aria-label="${labels[i]}">
      <span class="mood-emoji">${emoji}</span>
      <span class="mood-label">${escHtml(labels[i])}</span>
    </button>`).join('')}
  </div>`;
}

function renderProgress(currentStep) {
  const labels = t('progressLabels');
  const pct = ((currentStep - 1) / 4) * 100;
  const dots = Array.from({ length: 5 }, (_, i) => {
    const cls = i + 1 < currentStep ? 'done' : i + 1 === currentStep ? 'active' : '';
    const inner = i + 1 < currentStep ? '✓' : String(i + 1);
    return `<div class="progress-dot ${cls}" title="${labels[i]}">${inner}</div>`;
  }).join('');
  return `<div class="progress-container">
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="progress-dots">${dots}</div>
  </div>`;
}

function renderExportButtons(isMorning) {
  const excelLabel = isMorning ? t('btnExportExcelMorning') : t('btnExportExcel');
  return `<div class="export-buttons">
    <button class="btn-export" onclick="handleExportExcel()">${excelLabel}</button>
    <button class="btn-export" onclick="handleExportMarkdown()">${t('btnExportMarkdown')}</button>
  </div>`;
}

/* ============================================================
   ROUTING
   ============================================================ */
function renderCurrentScreen() {
  switch (state.mode) {
    case 'landing':             renderLandingPage();        break;
    case null:                  renderModeSelector();       break;
    case 'evening':             renderEveningStep();        break;
    case 'evening-complete':    renderEveningComplete();    break;
    case 'morning':             renderMorningFlow();        break;
    case 'morning-no-session':  renderNoYesterdaySession(); break;
    case 'morning-complete':    renderMorningComplete();    break;
    default:                    renderModeSelector();
  }
}

/* ============================================================
   MODE SELECTOR
   ============================================================ */
function renderModeSelector() {
  const h = getCurrentHour();
  const greet = h < 11 ? t('greetingMorning') : h >= 16 ? t('greetingEvening') : t('greetingNeutral');

  setApp(`<div class="screen screen-center">
    <p class="greeting">${escHtml(greet)}</p>
    <h2 class="mode-selector-title">${escHtml(t('modeSelectorTitle'))}</h2>
    <div class="mode-cards">
      <button class="mode-card mode-card-evening" onclick="startEvening()">
        <div class="mode-card-icon">🌙</div>
        <div>
          <div class="mode-card-title">${escHtml(t('modeEveningTitle'))}</div>
          <div class="mode-card-desc">${escHtml(t('modeEveningDesc'))}</div>
        </div>
      </button>
      <button class="mode-card mode-card-morning" onclick="handleStartMorning()">
        <div class="mode-card-icon">☀️</div>
        <div>
          <div class="mode-card-title">${escHtml(t('modeMorningTitle'))}</div>
          <div class="mode-card-desc">${escHtml(t('modeMorningDesc'))}</div>
        </div>
      </button>
    </div>
  </div>`);
}

/* ============================================================
   LANDING PAGE
   ============================================================ */
function renderLandingPage() {
  setApp(`<div class="screen landing-screen">
    <div class="landing-hero">
      <p class="landing-tagline">${escHtml(t('landingTagline'))}</p>
      <p class="landing-desc">${escHtml(t('landingDesc'))}</p>
    </div>

    <div class="landing-features">
      <div class="landing-feature">
        <span class="landing-feature-icon">🌙</span>
        <div>
          <div class="landing-feature-title">${escHtml(t('landingEveningTitle'))}</div>
          <div class="landing-feature-desc">${escHtml(t('landingEveningDesc'))}</div>
        </div>
      </div>
      <div class="landing-feature">
        <span class="landing-feature-icon">☀️</span>
        <div>
          <div class="landing-feature-title">${escHtml(t('landingMorningTitle'))}</div>
          <div class="landing-feature-desc">${escHtml(t('landingMorningDesc'))}</div>
        </div>
      </div>
    </div>

    <p class="landing-data-note">${escHtml(t('landingDataNote'))}</p>
    <p class="landing-version">v${escHtml(state.appVersion)}</p>

    <div class="landing-actions">
      <button class="btn-primary landing-cta" onclick="enterApp()">${escHtml(t('landingCta'))}</button>
      <a class="landing-github"
         href="https://github.com/AlexRosbach/BrainDumpApp"
         target="_blank"
         rel="noopener noreferrer">${escHtml(t('landingGithub'))}</a>
    </div>
  </div>`);
}

async function enterApp() {
  state.mode = null;
  document.body.classList.remove('morning', 'evening');

  const h = getCurrentHour();
  if (h < 11) {
    await handleStartMorning();
  } else if (h >= 16) {
    startEvening();
  } else {
    renderModeSelector();
  }
}

/* ============================================================
   EVENING FLOW
   ============================================================ */
function startEvening() {
  document.body.classList.remove('morning');
  document.body.classList.add('evening');
  state.mode = 'evening';
  state.step = 1;
  renderEveningStep();
}

function renderEveningStep() {
  const step = state.step;
  const isFirst = step === 1;
  const isLast  = step === 5;

  setApp(`<div class="screen">
    ${renderProgress(step)}
    <div class="step-content">${buildStepContent(step)}</div>
    <div class="step-nav">
      ${isFirst
        ? '<div></div>'
        : `<button class="btn-nav btn-back" onclick="eveningBack()">${escHtml(t('btnBack'))}</button>`}
      <button class="btn-nav btn-next" onclick="eveningNext()">
        ${escHtml(isLast ? t('btnFinish') : t('btnNext'))}
      </button>
    </div>
  </div>`);

  // Focus main input
  const focus = { 2: 'bd-input', 3: 'win-input', 4: 'task-input', 5: 'intention-input' }[step];
  if (focus) {
    const el = document.getElementById(focus);
    if (el) { el.focus(); const len = el.value.length; try { el.setSelectionRange(len, len); } catch (_) {} }
  }
}

function buildStepContent(step) {
  switch (step) {
    case 1: return `
      <h2 class="step-title">${escHtml(t('step1Title'))}</h2>
      <p class="step-desc">${escHtml(t('step1Desc'))}</p>
      ${renderMoodPicker(state.eveningData.mood, 'selectEveningMood')}`;

    case 2: return `
      <h2 class="step-title">${escHtml(t('step2Title'))}</h2>
      <p class="step-desc">${escHtml(t('step2Desc'))}</p>
      <textarea id="bd-input" class="large-textarea"
        placeholder="${escHtml(t('step2Placeholder'))}"
        oninput="state.eveningData.brain_dump=this.value"
      >${escHtml(state.eveningData.brain_dump)}</textarea>`;

    case 3: return `
      <h2 class="step-title">${escHtml(t('step3Title'))}</h2>
      <p class="step-desc">${escHtml(t('step3Desc'))}</p>
      <div class="chip-input-area">
        <div id="wins-chips" class="chips-container">
          ${state.eveningData.wins.map((w, i) => chipHtml(w, `removeWin(${i})`)).join('')}
        </div>
        <div class="chip-input-row">
          <input id="win-input" type="text" class="tag-input"
            placeholder="${escHtml(t('step3Placeholder'))}"
            onkeydown="if(event.key==='Enter'){event.preventDefault();addWin();}" />
          <button class="btn-add" onclick="addWin()">${escHtml(t('step3AddBtn'))}</button>
        </div>
      </div>
      <div id="wins-error" class="field-error hidden"></div>`;

    case 4: return `
      <h2 class="step-title">${escHtml(t('step4Title'))}</h2>
      <p class="step-desc">${escHtml(t('step4Desc'))}</p>
      <div id="tasks-list" class="tasks-list">
        ${state.eveningData.tasks.map((task, i) => taskItemHtml(task.text, i)).join('')}
      </div>
      ${state.eveningData.tasks.length < 3 ? `
        <div class="chip-input-row">
          <input id="task-input" type="text" class="tag-input"
            placeholder="${escHtml(t('step4Placeholder'))}"
            onkeydown="if(event.key==='Enter'){event.preventDefault();addTask();}" />
          <button class="btn-add" onclick="addTask()">${escHtml(t('step4AddBtn'))}</button>
        </div>` : ''}
      <div id="tasks-error" class="field-error hidden"></div>`;

    case 5: return `
      <h2 class="step-title">${escHtml(t('step5Title'))}</h2>
      <p class="step-desc">${escHtml(t('step5Desc'))}</p>
      <textarea id="intention-input" class="large-textarea intention-textarea"
        placeholder="${escHtml(t('step5Placeholder'))}"
        oninput="state.eveningData.intention=this.value"
      >${escHtml(state.eveningData.intention)}</textarea>`;

    default: return '';
  }
}

function chipHtml(text, removeFn) {
  return `<span class="chip">${escHtml(text)}<button class="chip-remove" onclick="${removeFn}">×</button></span>`;
}

function taskItemHtml(text, i) {
  return `<div class="task-item">
    <span class="task-num">${i + 1}.</span>
    <span class="task-text">${escHtml(text)}</span>
    <button class="task-remove" onclick="removeTask(${i})">×</button>
  </div>`;
}

function selectEveningMood(val) {
  state.eveningData.mood = val;
  renderEveningStep();
}

function addWin() {
  const input = document.getElementById('win-input');
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  state.eveningData.wins.push(val);
  input.value = '';
  refreshWinsChips();
  input.focus();
}

function removeWin(i) {
  state.eveningData.wins.splice(i, 1);
  refreshWinsChips();
}

function refreshWinsChips() {
  const container = document.getElementById('wins-chips');
  if (container) {
    container.innerHTML = state.eveningData.wins.map((w, i) => chipHtml(w, `removeWin(${i})`)).join('');
  }
}

function addTask() {
  const input = document.getElementById('task-input');
  if (!input) return;
  if (state.eveningData.tasks.length >= 3) {
    showFieldError('tasks-error', t('step4MaxError'));
    return;
  }
  const val = input.value.trim();
  if (!val) return;
  state.eveningData.tasks.push({ text: val, done: false });
  renderEveningStep();
}

function removeTask(i) {
  state.eveningData.tasks.splice(i, 1);
  renderEveningStep();
}

function showFieldError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 3200);
}

async function eveningNext() {
  const step = state.step;
  if (step === 1 && !state.eveningData.mood) {
    showToast(t('selectMoodHint'), 'error');
    return;
  }
  if (step === 3 && state.eveningData.wins.length === 0) {
    showFieldError('wins-error', t('step3MinError'));
    return;
  }
  if (step === 4 && state.eveningData.tasks.length === 0) {
    showFieldError('tasks-error', t('step4EmptyError'));
    return;
  }
  if (step === 5) {
    await finishEvening();
    return;
  }
  state.step = step + 1;
  renderEveningStep();
}

function eveningBack() {
  if (state.step > 1) {
    state.step -= 1;
    renderEveningStep();
  } else {
    state.mode = null;
    document.body.classList.remove('evening');
    renderModeSelector();
  }
}

async function finishEvening() {
  const payload = {
    evening_mood: state.eveningData.mood,
    brain_dump: state.eveningData.brain_dump,
    wins: state.eveningData.wins,
    tasks: state.eveningData.tasks,
    intention: state.eveningData.intention,
    evening_saved_at: new Date().toISOString(),
  };
  const result = await apiSaveSession(state.todayStr, payload);
  if (!result) {
    showToast(t('saveFailed'), 'error');
    return;
  }
  state.mode = 'evening-complete';
  renderEveningComplete();
}

function renderEveningComplete() {
  setApp(`<div class="screen screen-complete">
    <div class="complete-icon">🌙</div>
    <h2 class="complete-title">${escHtml(t('eveningCompleteTitle'))}</h2>
    <p class="complete-text">${escHtml(t('eveningCompleteText'))}</p>
    ${renderExportButtons(false)}
    <button class="btn-secondary btn-restart" onclick="restartApp()">${escHtml(t('btnNewSession'))}</button>
  </div>`);
}

/* ============================================================
   MORNING FLOW
   ============================================================ */
async function handleStartMorning() {
  document.body.classList.remove('evening');
  document.body.classList.add('morning');

  const session = await apiLoadSession(state.yesterdayStr);
  state.yesterdaySession = session;

  if (!session || !session.evening_mood) {
    state.mode = 'morning-no-session';
    renderNoYesterdaySession();
    return;
  }

  state.morningTasks = (session.tasks || []).map(tk => ({ ...tk }));
  state.morningMood = null;
  state.morningNote = '';
  state.mode = 'morning';
  renderMorningFlow();
}

function renderNoYesterdaySession() {
  setApp(`<div class="screen screen-center" style="padding-top:32px">
    <div class="empty-icon">📭</div>
    <h2 class="step-title">${escHtml(t('noYesterdayTitle'))}</h2>
    <p class="step-desc" style="text-align:center">${escHtml(t('noYesterdayText'))}</p>

    <div class="import-box">
      <p class="import-hint">${escHtml(t('importHint'))}</p>
      <label class="btn-upload">
        ${escHtml(t('btnImportExcel'))}
        <input id="excel-file-input" type="file" accept=".xlsx"
               onchange="handleExcelImport(event)" hidden />
      </label>
      <div id="import-error" class="field-error hidden"></div>
    </div>

    <div class="btn-group">
      <button class="btn-secondary" onclick="proceedMorningEmpty()">${escHtml(t('btnContinueAnyway'))}</button>
      <button class="btn-primary"   onclick="startEvening()">${escHtml(t('btnGoToEvening'))}</button>
    </div>
  </div>`);
}

async function handleExcelImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('/api/import/excel', { method: 'POST', body: formData });

    if (!res.ok) {
      showFieldError('import-error', t('importError'));
      // reset so the user can try again
      document.getElementById('excel-file-input').value = '';
      return;
    }

    const session = await res.json();
    state.yesterdaySession = session;
    state.morningTasks = (session.tasks || []).map(tk => ({ ...tk }));
    state.morningMood  = null;
    state.morningNote  = '';
    state.mode = 'morning';
    renderMorningFlow();

    const fromDate = session.source_date ? ` (${t('importedFrom')} ${session.source_date})` : '';
    showToast(t('importSuccess') + fromDate, 'success');

  } catch (e) {
    console.error('Excel import failed', e);
    showFieldError('import-error', t('importError'));
  }
}

function proceedMorningEmpty() {
  state.yesterdaySession = {};
  state.morningTasks = [];
  state.morningMood = null;
  state.morningNote = '';
  state.mode = 'morning';
  renderMorningFlow();
}

function renderMorningFlow() {
  const session = state.yesterdaySession || {};
  const intention = session.intention || '';
  const tasks = state.morningTasks;

  const intentionHtml = intention ? `
    <div class="morning-section morning-intention-card">
      <div class="section-label">${escHtml(t('morningIntentionSection'))}</div>
      <blockquote class="intention-quote">${escHtml(intention)}</blockquote>
    </div>` : '';

  const tasksHtml = tasks.length > 0
    ? tasks.map((task, i) => `
      <div class="morning-task-item${task.done ? ' done' : ''}" onclick="toggleMorningTask(${i})">
        <div class="morning-task-check">${task.done ? '✓' : ''}</div>
        <span class="morning-task-text">${escHtml(task.text)}</span>
      </div>`).join('')
    : `<p class="empty-text">${escHtml(t('morningNoTasks'))}</p>`;

  setApp(`<div class="screen morning-screen">
    <h2 class="screen-title">${escHtml(t('morningTitle'))}</h2>

    ${intentionHtml}

    <div class="morning-section">
      <div class="section-label">${escHtml(t('morningTasksSection'))}</div>
      <div id="morning-tasks-list" class="morning-tasks-list">${tasksHtml}</div>
    </div>

    <div class="morning-section">
      <div class="section-label">${escHtml(t('morningMoodSection'))}</div>
      ${renderMoodPicker(state.morningMood, 'selectMorningMood')}
    </div>

    <div class="morning-section">
      <div class="section-label">${escHtml(t('morningNoteSection'))}</div>
      <textarea id="morning-note" class="large-textarea"
        placeholder="${escHtml(t('morningNotePlaceholder'))}"
        oninput="state.morningNote=this.value"
      >${escHtml(state.morningNote)}</textarea>
    </div>

    <button class="btn-primary btn-save-morning" onclick="saveMorningCheckin()">
      ${escHtml(t('btnSaveMorning'))}
    </button>
    <button class="btn-back-top" onclick="goBack()">← ${escHtml(t('btnBack'))}</button>
  </div>`);
}

function toggleMorningTask(i) {
  state.morningTasks[i].done = !state.morningTasks[i].done;
  const list = document.getElementById('morning-tasks-list');
  if (list) {
    list.innerHTML = state.morningTasks.map((task, idx) => `
      <div class="morning-task-item${task.done ? ' done' : ''}" onclick="toggleMorningTask(${idx})">
        <div class="morning-task-check">${task.done ? '✓' : ''}</div>
        <span class="morning-task-text">${escHtml(task.text)}</span>
      </div>`).join('');
  }
}

function selectMorningMood(val) {
  state.morningMood = val;
  const picker = document.querySelector('.morning-screen .mood-picker');
  if (picker) {
    const tmp = document.createElement('div');
    tmp.innerHTML = renderMoodPicker(state.morningMood, 'selectMorningMood');
    picker.replaceWith(tmp.firstElementChild);
  }
}

async function saveMorningCheckin() {
  const payload = {
    tasks: state.morningTasks,
    morning_mood: state.morningMood,
    morning_note: state.morningNote,
    morning_date: state.todayStr,
    morning_saved_at: new Date().toISOString(),
  };
  const result = await apiSaveSession(state.yesterdayStr, payload);
  if (!result) {
    showToast(t('saveFailed'), 'error');
    return;
  }
  state.mode = 'morning-complete';
  renderMorningComplete();
}

function renderMorningComplete() {
  setApp(`<div class="screen screen-complete">
    <div class="complete-icon">☀️</div>
    <h2 class="complete-title">${escHtml(t('morningCompleteTitle'))}</h2>
    <p class="complete-text">${escHtml(t('morningCompleteText'))}</p>
    ${renderExportButtons(true)}
    <button class="btn-secondary btn-restart" onclick="restartApp()">${escHtml(t('btnNewSession'))}</button>
  </div>`);
}

/* ============================================================
   EXPORT HANDLERS
   ============================================================ */
async function handleExportExcel() {
  const dateStr = state.mode === 'morning-complete' ? state.yesterdayStr : state.todayStr;
  const ok = await apiExportExcel(dateStr);
  showToast(ok ? t('exportSuccess') : t('exportError'), ok ? 'success' : 'error');
}

async function handleExportMarkdown() {
  const dateStr = state.mode === 'morning-complete' ? state.yesterdayStr : state.todayStr;
  const md = await apiGetMarkdown(dateStr);
  if (!md) {
    showToast(t('exportError'), 'error');
    return;
  }
  showMarkdownModal(md);
}

function showMarkdownModal(md) {
  const modal = document.getElementById('md-modal');
  document.getElementById('md-modal-title').textContent = t('mdModalTitle');
  document.getElementById('md-content').textContent = md;
  document.getElementById('btn-copy-md').textContent = t('btnCopyMd');
  document.getElementById('btn-close-md').textContent = t('btnCloseMd');
  modal.classList.remove('hidden');
}

function closeMarkdownModal() {
  document.getElementById('md-modal').classList.add('hidden');
}

async function copyMarkdown() {
  const content = document.getElementById('md-content').textContent;
  try {
    await navigator.clipboard.writeText(content);
    const btn = document.getElementById('btn-copy-md');
    const original = btn.textContent;
    btn.textContent = t('btnCopied');
    setTimeout(() => { btn.textContent = original; }, 2000);
  } catch (e) {
    showToast(t('exportError'), 'error');
  }
}

/* ============================================================
   NAVIGATION HELPERS
   ============================================================ */
function goBack() {
  state.mode = null;
  document.body.classList.remove('morning', 'evening');
  renderModeSelector();
}

function restartApp() {
  state.mode = null;
  state.step = 1;
  state.eveningData = { mood: null, brain_dump: '', wins: [], tasks: [], intention: '' };
  state.morningTasks = [];
  state.morningMood = null;
  state.morningNote = '';
  state.yesterdaySession = null;
  document.body.classList.remove('morning', 'evening');
  renderModeSelector();
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', async () => {
  state.todayStr = getTodayStr();
  state.yesterdayStr = getYesterdayStr();
  state.appVersion = getAppVersion();

  // Apply persisted preferences
  applyTheme(state.theme);
  document.getElementById('lang-btn').textContent = t('langToggleLabel');
  document.getElementById('header-title').textContent = t('appTitle');
  document.getElementById('header-version').textContent = `v${state.appVersion}`;
  document.documentElement.lang = state.lang;

  // Wire up header buttons
  document.getElementById('lang-btn').addEventListener('click', toggleLang);
  document.getElementById('theme-btn').addEventListener('click', toggleTheme);

  // Clicking the app title always returns to the landing page
  document.getElementById('header-title').style.cursor = 'pointer';
  document.getElementById('header-title').addEventListener('click', () => {
    state.mode = 'landing';
    document.body.classList.remove('morning', 'evening');
    renderLandingPage();
  });

  // Wire up markdown modal buttons
  document.getElementById('btn-copy-md').addEventListener('click', copyMarkdown);
  document.getElementById('btn-close-md').addEventListener('click', closeMarkdownModal);
  document.getElementById('md-modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMarkdownModal();
  });

  // Always start on the landing page when the browser loads.
  state.mode = 'landing';
  renderLandingPage();
});
