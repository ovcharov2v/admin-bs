document.addEventListener('DOMContentLoaded', () => {
  const filter = document.querySelector('.filter');
  if (!filter) return;

  // toggle
  const toggleBtn = filter.querySelector('.js-filter-toggle');
  toggleBtn.addEventListener('click', () => {
    filter.classList.toggle('filter--expanded')
  })

  // grid
  const table = document.querySelector('.data-table');
  const viewClassList = ['view-grid', 'view-list', 'view-table'];
  const btnList = filter.querySelectorAll('.button[data-view]');
  btnList.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('button--active')) return;
      btnList.forEach(btn => btn.classList.remove('button--active'));
      viewClassList.forEach(className => table.classList.remove(className));
      btn.classList.add('button--active');
      table.classList.add(btn.dataset.view);
    })
  })
});