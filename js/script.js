const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()
    const targetBlockId = anchor.getAttribute('href')

    if (targetBlockId === '#') return

    const targetBlock = document.querySelector(`${targetBlockId}`)
    targetBlock.scrollIntoView({
      behavior: 'smooth',
    })
  })
})
