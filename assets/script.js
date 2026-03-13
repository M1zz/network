// ─── PROGRESS ──────────────────────────────────────────────────
const STORAGE_KEY = 'devjaeri_network_progress';

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getPageKey() {
  const path = window.location.pathname;
  if (path.includes('5-1')) return '5-1';
  if (path.includes('5-2')) return '5-2';
  if (path.includes('5-3')) return '5-3';
  return 'index';
}

// ─── TOPICS ────────────────────────────────────────────────────
function initTopics() {
  const progress = loadProgress();
  const pageKey  = getPageKey();
  const saved    = progress[pageKey] || {};

  document.querySelectorAll('.topic-item').forEach(el => {
    const id = el.dataset.id;
    if (saved[id]) el.classList.add('checked');
    updateCheckIcon(el);

    el.addEventListener('click', () => {
      el.classList.toggle('checked');
      updateCheckIcon(el);

      const prog2 = loadProgress();
      if (!prog2[pageKey]) prog2[pageKey] = {};
      prog2[pageKey][id] = el.classList.contains('checked');
      saveProgress(prog2);

      updateProgressBar();
      updateMiniProg();
    });
  });

  updateProgressBar();
  updateMiniProg();
}

function updateCheckIcon(el) {
  const box = el.querySelector('.topic-check-box');
  if (!box) return;
  box.textContent = el.classList.contains('checked') ? '✓' : '';
}

// ─── PROGRESS BAR ──────────────────────────────────────────────
function updateProgressBar() {
  const total   = document.querySelectorAll('.topic-item').length;
  const done    = document.querySelectorAll('.topic-item.checked').length;
  const pct     = total > 0 ? Math.round((done / total) * 100) : 0;

  const fill = document.getElementById('prog-fill');
  const num  = document.getElementById('prog-num');
  if (fill) fill.style.width = pct + '%';
  if (num)  num.textContent  = `${done} / ${total}`;
}

// ─── MINI PROGRESS (topbar) ─────────────────────────────────────
function updateMiniProg() {
  const total = document.querySelectorAll('.topic-item').length;
  const done  = document.querySelectorAll('.topic-item.checked').length;
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0;

  const fill  = document.querySelector('.prog-mini-fill');
  const label = document.querySelector('.prog-mini-label');
  if (fill)  fill.style.width    = pct + '%';
  if (label) label.textContent   = `${done}/${total}`;
}

// ─── QUIZ ───────────────────────────────────────────────────────
function initQuiz() {
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', function() {
      const container = this.closest('.quiz-options');
      const quizId    = container.dataset.quizId;
      const isCorrect = this.dataset.correct === 'true';
      const fb        = document.getElementById('fb-' + quizId);

      container.querySelectorAll('.quiz-opt').forEach(b => {
        b.disabled = true;
        b.style.cursor = 'default';
      });

      if (isCorrect) {
        this.classList.add('correct');
        if (fb) { fb.className = 'quiz-feedback show ok'; fb.textContent = '✓ 정답! 올바른 방법을 선택했습니다.'; }
      } else {
        this.classList.add('wrong');
        container.querySelectorAll('[data-correct="true"]').forEach(b => b.classList.add('correct'));
        if (fb) { fb.className = 'quiz-feedback show no'; fb.textContent = '✗ 오답. 다른 옵션이 더 적절합니다.'; }
      }
    });
  });
}

// ─── ACCORDION ─────────────────────────────────────────────────
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.accordion-item');
      const body = item.querySelector('.accordion-body');
      const icon = btn.querySelector('.accordion-icon');
      const open = item.classList.contains('open');

      item.classList.toggle('open', !open);
      body.style.display = open ? 'none' : 'block';
      if (icon) icon.textContent = open ? '+' : '−';
    });
  });
}

// ─── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTopics();
  initQuiz();
  initAccordion();
});
