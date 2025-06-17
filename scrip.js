// Switch Bahasa
function switchLang(lang) {
  document.querySelectorAll('.lang-id').forEach(el => el.classList.remove('active-lang'));
  document.querySelectorAll('.lang-en').forEach(el => el.classList.remove('active-lang'));
  document.querySelectorAll('.lang-' + lang).forEach(el => el.classList.add('active-lang'));
}

// Statistik Kunjungan
document.addEventListener("DOMContentLoaded", () => {
  let visits = localStorage.getItem('visitCount') || 0;
  visits++;
  localStorage.setItem('visitCount', visits);
  const visitText = document.getElementById("visit-count");
  if (visitText) visitText.textContent = `Website dikunjungi ${visits} kali`;

  // Klik Unduh CV
  const cvBtn = document.getElementById("cv-btn");
  let cvClicks = localStorage.getItem('cvClicks') || 0;
  if (cvBtn) {
    cvBtn.addEventListener("click", () => {
      cvClicks++;
      localStorage.setItem('cvClicks', cvClicks);
      const clickText = document.getElementById("cv-clicks");
      if (clickText) clickText.textContent = `CV diunduh ${cvClicks} kali`;
    });
    const clickText = document.getElementById("cv-clicks");
    if (clickText) clickText.textContent = `CV diunduh ${cvClicks} kali`;
  }
});
