export const stickyHeader = () => {
  // Get the header
  const header = document.getElementById('header')

  // Get the offset position of the navbar
  const sticky = header.offsetTop

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // console.log(window.pageYOffset)

  if (window.pageYOffset > 200) {
    header.classList.add('navbar--is-sticky')
  } else {
    header.classList.remove('navbar--is-sticky')
  }
}
