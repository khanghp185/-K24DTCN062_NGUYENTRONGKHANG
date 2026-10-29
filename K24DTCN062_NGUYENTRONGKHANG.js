// ===== DIGITAL CLOCK =====
function updateClock() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `🕐 ${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

// ===== WELCOME MESSAGE (on page load) =====
window.addEventListener('load', () => {
  const now = new Date();
  const day  = String(now.getDate()).padStart(2, '0');
  const mon  = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  alert(`Hôm nay là ngày ${day}/${mon}/${year}\nChào mừng bạn đến với trang của Nguyễn Trọng Khang!`);
});

// ===== AVATAR POPUP =====
const avatarRing  = document.getElementById('avatarRing');
const avatarModal = document.getElementById('avatar-modal');
const modalClose  = document.getElementById('modal-close');

if (avatarRing) {
  avatarRing.addEventListener('click', () => {
    avatarModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  avatarRing.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      avatarModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  });
}
if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}
if (avatarModal) {
  avatarModal.addEventListener('click', (e) => {
    if (e.target === avatarModal) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
function closeModal() {
  avatarModal.classList.remove('show');
  document.body.style.overflow = '';
}

// ===== SHOW/HIDE HOBBIES =====
const toggleBtn   = document.getElementById('hobbies-toggle');
const hobbiesList = document.getElementById('hobbies-list');
let hobbiesOpen   = false;

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    hobbiesOpen = !hobbiesOpen;
    if (hobbiesOpen) {
      hobbiesList.classList.add('open');
      toggleBtn.innerHTML = '👆 Thu gọn';
    } else {
      hobbiesList.classList.remove('open');
      toggleBtn.innerHTML = '👇 Xem thêm';
    }
  });
}

// ===== AUTO COPYRIGHT YEAR =====
const yearEl = document.getElementById('copy-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
