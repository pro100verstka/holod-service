export function openModal(modal, trigger) {
  const modalEl = document.querySelector(`#${modal}`)
  const openButtons = document.querySelectorAll(`.${trigger}`)
  const closeButton = document.querySelector('.modal__close')
  const overlay = document.querySelector('.modal__overlay')
  const body = document.body

  openButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      modalEl.classList.add('active')
      body.classList.add('lock')
    })

    function closeModal() {
      modalEl.classList.remove('active')
      body.classList.remove('lock')
    }

    closeButton.addEventListener('click', () => {
      closeModal()
    })

    overlay.addEventListener('click', () => {
      closeModal()
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    })
  })
}