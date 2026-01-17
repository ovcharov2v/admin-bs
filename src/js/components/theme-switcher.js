document.addEventListener('DOMContentLoaded', () => {
  const removeAllThemes = () => {
    const classList = document.documentElement.classList;
    for (let i = classList.length - 1; i >= 0; i--) {
      const className = classList[i];
      if (className.startsWith('theme-')) {
        classList.remove(className);
      }
    }
  }
  const btnList = document.querySelectorAll('.js-set-theme');
  if(btnList.length > 0) {
    btnList.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        removeAllThemes()
        document.documentElement.classList.add(`theme-${theme}`);
      });
    });
  }
});