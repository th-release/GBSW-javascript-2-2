const keyEvent = document.getElementById('keyEvent')

keyEvent.addEventListener('keydown', () => {
  keyEvent.value = keyEvent.value.replace(/[^0-9]/g, "");
})