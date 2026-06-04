export function showSuccessPopup() {
  const forms = document.querySelectorAll('.form');
  const successPopup = document.querySelector('#success-popup');
  const applicationModal = document.querySelector('#application-modal');
  const body = document.body

  forms.forEach((form) => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      if (applicationModal && applicationModal.classList.contains('active')) {
        applicationModal.classList.remove('active');
        body.classList.remove('lock')
      }

      successPopup.classList.add('active')

      setTimeout(() => {
        successPopup.classList.remove('active')
      }, 3000)

      form.reset()
    })
  })
}