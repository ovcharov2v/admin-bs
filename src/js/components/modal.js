// Open modal
const openModal = (modalId) => {
  const modal = document.querySelector(modalId)

  if (!modal) {
    console.warn(`Modal ${modalId} does not exist!`)
    return
  }

  if(modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = 'fixed';
  }
  document.body.style.overflow = 'hidden';

  modal.style.display = 'flex'

  setTimeout(() => {
    modal.classList.add('modal--show')
  })
}

// Close modal
const closeModal = () => {
  const modal = document.querySelector('.modal--show')
  if (!modal) return

  if(modal.classList.contains('modal--header-fixed')) {
    document.querySelector('.header').style.position = '';
  }

  modal.classList.remove('modal--show')
  document.body.style.overflow = '';
  setTimeout(() => {
    modal.style.display = '';
  }, 350, modal)
}

document.addEventListener('DOMContentLoaded', () => {
  const modalLinks = document.querySelectorAll('[data-modal]')

  if (modalLinks.length) {
    modalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const modalId = `#modal-${link.dataset.modal}`
        openModal(modalId)
        return false
      })
    })
  }

  // Close on Close btn click
  const closeButtons = document.querySelectorAll('.js-close-modal')
  if (closeButtons.length) {
    closeButtons.forEach((button) => {
      button.addEventListener('click', () => closeModal())
    })
  }

  // Close on Escape
  document.body.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }, false)

  // modal help
  const modalHelp = document.querySelector('#modal-help')
  const helpLinkList = document.querySelectorAll('.modal-help__list-el-content')
  if (helpLinkList.length) {
    helpLinkList.forEach((link) => {
      link.addEventListener('click', () => {
        const el = link.closest('.modal-help__list-el')
        el.classList.toggle('modal-help__list-el--opened');
      })
    })
  }
  const helpSubLinkList = document.querySelectorAll('.modal-help__sublist-el')
  if (helpSubLinkList.length) {
    helpSubLinkList.forEach((link) => {
      link.addEventListener('click', () => modalHelp.classList.add('modal-help--slide-show'))
    })
  }

  const backBtn = document.querySelector('.modal-help__back-btn');
  if(backBtn) {
    backBtn.addEventListener('click', () => modalHelp.classList.remove('modal-help--slide-show'))
  }
})

