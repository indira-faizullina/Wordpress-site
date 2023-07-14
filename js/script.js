// плавная прокрутка меню

const anchors = document.querySelectorAll('li>a[href*="#"]')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()

    removeActiveClass(anchors)
    anchor.closest('li').classList.add('active')

    const targetBlockId = anchor.getAttribute('href')
    if (targetBlockId === '#') return

    const targetBlock = document.querySelector(`${targetBlockId}`)
    targetBlock.scrollIntoView({
      behavior: 'smooth',
    })
  })
})

function removeActiveClass(arr) {
  arr.forEach((elem) => elem.closest('li').classList.remove('active'))
}
