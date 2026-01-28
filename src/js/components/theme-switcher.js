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
  const switcherList = document.querySelectorAll('.theme-switcher');
  if(switcherList.length > 0) {
    switcherList.forEach(switcher => {
      switcher.addEventListener('click', () => {
        if(document.documentElement.classList.contains('theme-light')) {
          removeAllThemes();
          document.documentElement.classList.add('theme-dark');
        }
        else {
          removeAllThemes();
          document.documentElement.classList.add('theme-light');
        }
      });
    });
  }
});