// Imposta la data massima del calendario ad oggi
document.getElementById('to').value = DateTime.now().toString().split('T')[0];
document.getElementById('from').value = DateTime.now().minus({ months: 1 }).toString().split('T')[0];
document.getElementById("to").setAttribute("max", DateTime.now().toString().split('T')[0]);
document.getElementById("from").setAttribute("max", DateTime.now().toString().split('T')[0]);



const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}