// import { animateGames, animateShiaverse, enterSite, shibaNfts, stakingAnimation } from './scripts/animations'
// import { footerAnimation } from './scripts/animations'
import { closeMenu, mobileNav } from './scripts/mobileNav'
import { enterSite, shibaNfts, animateGames, animateShiaverse, animateTokenomics } from './scripts/animationsv2'

async function init() {
  // import all your functions/code there
  enterSite()
  mobileNav()
  animateShiaverse()
  animateGames()
  shibaNfts()
  animateTokenomics()

  const navLink = document.querySelectorAll('.navbar__menu-link')
  const burger = document.getElementById('burger')

  navLink.forEach((n) =>
    n.addEventListener('click', () => {
      burger.classList.remove('navbar__burger--is-active')
      closeMenu()
    }),
  )
}

if (document.readyState === 'complete') {
  init()
} else {
  window.addEventListener('load', init)
}
