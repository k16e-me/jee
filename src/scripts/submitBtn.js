const form = document.querySelector("form.searchfilter");
const submitBtn = document.querySelector("button[type='submit']")
const searchInput = document.querySelector(".local-search input")

if (submitBtn) {
  if (searchInput) {
    searchInput.addEventListener('input', () => submitBtn.classList.remove('hidden'), {
      once: true,
    });
  }

  form?.addEventListener(
    'change',
    () => {
      submitBtn.classList.remove('hidden');
    },
    { once: true },
  );
}
