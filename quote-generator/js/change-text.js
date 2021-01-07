const hiddenText = document.getElementById('hidden-text')

hiddenText.addEventListener('mouseenter', () => {
  hiddenText.innerText = 'bonehead'
})

hiddenText.addEventListener('mouseleave', () => {
  hiddenText.innerText = 'get a quote'
})
