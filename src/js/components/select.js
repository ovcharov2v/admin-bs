document.addEventListener('DOMContentLoaded', () => {
  const selectList = document.querySelectorAll('.select')
  if(!selectList.length) return

  selectList.forEach((select) => {
    select.addEventListener('click', (evt) => {
      evt.stopPropagation()
      closeAllSelect(select)
      if(!evt.target.closest('.select__list-box')) {
        select.classList.toggle('select--active')
      }
    })

    const current = select.querySelector('.select__current')
    const input = select.querySelector('.select__input')
    const selectItems = select.querySelectorAll('.select__list-item')

    selectItems.forEach((item)=>{
      item.addEventListener('click', () => {
        current.innerHTML = item.innerHTML
        current.classList.remove('select__current--placeholder')
        input.value = item.innerText
        const oldSelected = select.querySelector('.select__list-item--selected')
        oldSelected.classList.remove('select__list-item--selected')
        item.classList.add('select__list-item--selected')
      })
    })
  })

  document.addEventListener('click', closeAllSelect)

  function closeAllSelect(exeptSelect) {
    selectList.forEach((select) => {
      if(exeptSelect && exeptSelect === select) return
      select.classList.remove('select--active')
    })
  }
})