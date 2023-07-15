const anchors = document.querySelectorAll('li>a[href*="#"]')
const burgerMenu = document.querySelector('#burger-menu')
const burgerMenuToggle = document.querySelector('.menu__burger')

// плавная прокрутка при нажатии на пункт в меню

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault()

    removeActiveClass(anchors)
    anchor.closest('li').classList.add('active')
    burgerMenu.classList.toggle('open')

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

// бургер меню

burgerMenuToggle.addEventListener('click', () => {
  burgerMenu.classList.toggle('open')
})
