const toggleButton = document.getElementsByClassName('toggle-button')[0]
const right_side_nav = document.getElementsByClassName('right_side_nav')[0]

toggleButton.addEventListener('click', () => {
  right_side_nav.classList.toggle('active')
})