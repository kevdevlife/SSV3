export const mobileNav = () => {
  const burger = document.getElementById('burger')
  const navbar = document.getElementById('nav')
  const body = document.body

  /**
   * Burger Handler
   */
  if (burger) {
    burger.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('navbar__burger--is-active')

      navbar.classList.toggle('navbar__nav--is-visible')
      body.classList.toggle('is-non-scrollable')
    })
  }

  /**
   * Dropdown Header
   */
  const dropownBtns = document.getElementsByClassName('dropdown__btn')

  if (dropownBtns) {
    for (let i = 0; i < dropownBtns.length; i++) {
      dropownBtns[0].addEventListener('click', (e) => {
        e.preventDefault()
        const dropdownContent = document.getElementById('dropdown-content')
        dropdownContent.classList.toggle('dropdown__content--is-visible')
      })
    }
  }
}

export const closeMenu = () => {
  const navbar = document.getElementById('nav')
  const body = document.body
  navbar.classList.remove('navbar__nav--is-visible')
  body.classList.remove('is-non-scrollable')
}
