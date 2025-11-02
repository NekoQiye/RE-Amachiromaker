document.addEventListener('DOMContentLoaded', () => {
  const modalOverlay = document.getElementById('modal-overlay');
  const agreeButton = document.getElementById('agree-button');
  const disagreeButton = document.getElementById('disagree-button');

  const hasAgreed = localStorage.getItem('userAgreed');

  if (!hasAgreed) {
    setTimeout(() => {
      modalOverlay.classList.add('active');
    }, 500); // Slight delay to ensure styles are loaded
  }

  agreeButton.addEventListener('click', () => {
    localStorage.setItem('userAgreed', 'true');
    modalOverlay.classList.remove('active');
  });

  disagreeButton.addEventListener('click', () => {
    window.location.href = 'https://www.bilibili.com/video/BV1Es4y197cj/';
  });
});