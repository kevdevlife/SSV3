// import { animateGames, animateShiaverse, enterSite, shibaNfts, stakingAnimation } from './scripts/animations'
// import { footerAnimation } from './scripts/animations'
import { closeMenu, mobileNav } from './scripts/mobileNav'
import { initProgressBar } from './scripts/progressBar'
import {
  enterSite,
  shibaNfts,
  animateGames,
  animateShiaverse,
  footerAnimation,
  animatePresale,
} from './scripts/animationsv2'
import { stickyHeader } from './scripts/stickyHeader'

async function init() {
  // import all your functions/code there
  enterSite()
  mobileNav()
  animateShiaverse()
  animateGames()
  shibaNfts()
  // stakingAnimation()
  footerAnimation()
  stickyHeader()
  animatePresale()

  // initProgressBar()
  // animate()

  const navLink = document.querySelectorAll('.navbar__menu-link')
  const headerCta = document.getElementById('header-cta')
  const burger = document.getElementById('burger')

  navLink.forEach((n) =>
    n.addEventListener('click', () => {
      burger.classList.remove('navbar__burger--is-active')
      closeMenu()
    }),
  )

  headerCta.addEventListener('click', () => {
    closeMenu()
    burger.classList.remove('navbar__burger--is-active')
  })
}

if (document.readyState === 'complete') {
  init()
} else {
  window.addEventListener('load', init)
}
