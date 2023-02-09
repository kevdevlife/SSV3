import { gsap, Power1 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import $ from 'jquery'
gsap.registerPlugin(ScrollTrigger)

export const enterSite = () => {
  ScrollTrigger.defaults({
    toggleActions: 'restart pause resume pause',
  })

  gsap.to('.preloader', {
    ease: 'power2.inOut',
    yPercent: -100,
    duration: 2,
    delay: 3,
  })

  // mm.add('(min-width: 1024px)', () => {
  //   const zoom = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.hero',
  //       scrub: 2,
  //       pin: true,
  //     },
  //   })

  //   zoom.to('.mask', {
  //     opacity: 0,
  //     scale: '5',
  //     ease: 'power3.out',
  //   })

  //   zoom.fromTo(
  //     '.navbar',
  //     {
  //       y: 20,
  //       opacity: 0,
  //       ease: Power1,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //     },
  //   )

  //   zoom.fromTo(
  //     '.hero__main',
  //     {
  //       y: 20,
  //       opacity: 0,
  //       ease: Power1,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //     },
  //   )

  //   zoom.fromTo(
  //     '.hero__shia',
  //     {
  //       opacity: 0,
  //       x: 100,
  //       y: 100,
  //       ease: Power1,
  //     },
  //     {
  //       x: 0,
  //       y: 0,
  //       opacity: 1,
  //     },
  //   )

  //   zoom.fromTo(
  //     '.hero__coin',
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //     },
  //   )
  // })
}

export const animateGames = () => {
  let mm = gsap.matchMedia()
  const games = document.getElementById('games')

  mm.add('(min-width: 1024px)', () => {
    gsap
      .timeline({
        ease: Power1,
        scrollTrigger: {
          trigger: games,
          start: '-5% 0%',
          end: '100% 0',
          scrub: 1,
          pinSpacing: true,
        },
      })
      .fromTo(
        '.games__gradient',
        {
          backgroundSize: '0% 0%',
        },
        {
          backgroundSize: '100% 100%',
        },
      )
      .from('.js-kart-text', {
        opacity: 0,
        scale: 0.8,
      })
      .fromTo(
        '.kart',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
        },
      )
      .fromTo(
        '.js-kart-text',
        {
          rotation: 0,
        },
        {
          scale: 1,
          rotation: 20,
        },
      )
      .fromTo(
        '.js-kart-text',
        {
          rotation: 20,
        },
        {
          rotation: 0,
        },
      )
      .from(
        '.js-kart-coins',
        {
          opacity: 0,
        },
        '<',
      )
  })

  mm.add('(max-width: 1023px)', () => {
    gsap
      .timeline({
        ease: Power1,
        scrollTrigger: {
          trigger: games,
          start: '0% 0%',
          end: '100% 0',
        },
      })
      .fromTo(
        '.games__gradient',
        {
          backgroundSize: '0% 0%',
        },
        {
          backgroundSize: '100% 100%',
        },
      )
      .from('.js-kart-text', {
        opacity: 0,
        scale: 0.8,
      })
      .fromTo(
        '.kart',
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
        },
      )
      .fromTo(
        '.js-kart-text',
        {
          rotation: 0,
        },
        {
          scale: 1,
          rotation: 20,
        },
      )
      .fromTo(
        '.js-kart-text',
        {
          rotation: 20,
        },
        {
          rotation: 0,
        },
      )
      .from(
        '.js-kart-coins',
        {
          opacity: 0,
        },
        '<',
      )
  })
}

export const animateShiaverse = () => {
  const shiaverse = document.getElementById('shiaverse')
  let mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: shiaverse,
          start: '50% 50%',
          end: '100% 100%',
          scrub: 1.1,
          pin: true,
          pinSpacing: true,
        },
      })
      .from('.shia-vr', {
        y: 100,
        opacity: 0,
      })
      .from('.shiaverse-coins', {
        scale: 0.8,
        opacity: 0,
      })
  })

  mm.add('(max-width: 1023px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: shiaverse,
          start: 'top 30%',
          end: 'bottom 100%',
          toggleActions: 'play none none none',
        },
      })
      .from('.shia-vr', {
        y: 100,
        opacity: 0,
      })
      .from('.shiaverse-coins', {
        scale: 0.8,
        opacity: 0,
      })
  })
}

export const shibaNfts = () => {
  let mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', () => {
    $('#codeby a').mouseenter(function () {
      // HoverAnimation---------------------
      // gsap.to('#ImgWrapper', { backgroundColor: '#f0f0f0' })
      gsap.to('#codeby a', { color: '#2e2e2e' })
      gsap.to('#codeby a span', { color: '#000000' })
    })
    $('#codeby a').mouseout(function () {
      gsap.to('#codeby a', { color: '#e6e6e6' })
      gsap.to('#codeby a span', { color: '#f0f0f0' })
    }) // /HoverAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#ImgWrapper',
        start: '0% 0%',
        end: '100% 0%',
        pin: '#ImgWrapper',
        markers: true,
        scrub: 2.2,
        onEnter: () => {
          // gsap.to('.js-nft-title', { opacity: 0 })
          // gsap.to('.js-nft-subtitle', { opacity: 0 })
        },
      },
    })
    LandingPageScrollTrigger.to('#ImgWrapper #img7', { transform: 'translateZ(4500px)' }, 0)
      .to('#ImgWrapper #img6', { transform: 'translateZ(3700px)' }, 0)
      .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)' }, 0)
      .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)' }, 0)
      .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)' }, 0)
      .from('.nfts', { y: 130, opacity: 0 }, 0.31)
  })

  mm.add('(max-width: 1023px)', () => {
    $('#codeby a').mouseenter(function () {
      // HoverAnimation---------------------
      // gsap.to('#ImgWrapper', { backgroundColor: '#f0f0f0' })
      gsap.to('#codeby a', { color: '#2e2e2e' })
      gsap.to('#codeby a span', { color: '#000000' })
    })
    $('#codeby a').mouseout(function () {
      gsap.to('#codeby a', { color: '#e6e6e6' })
      gsap.to('#codeby a span', { color: '#f0f0f0' })
    }) // /HoverAnimation---------------------

    let LandingPageScrollTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#ImgWrapper',
        start: '0% 0%',
        end: '100% 0%',
        pin: '#ImgWrapper',
        scrub: 1.5,
        onEnter: () => {
          // gsap.to('.js-nft-title', { opacity: 0 })
          // gsap.to('.js-nft-subtitle', { opacity: 0 })
        },
      },
    })
    LandingPageScrollTrigger.to('#ImgWrapper #img6', { transform: 'translateZ(4500px)' }, 0)
      .to('#ImgWrapper #img5', { transform: 'translateZ(3100px)' }, 0)
      .to('#ImgWrapper #img4', { transform: 'translateZ(2800px)' }, 0)
      .to('#ImgWrapper #img3', { transform: 'translateZ(2600px)' }, 0)
      .to('#ImgWrapper #img2', { transform: 'translateZ(2400px)' }, 0)
      .to('#ImgWrapper #img1', { transform: 'translateZ(2200px)' }, 0)
      .from('.nfts', { y: 130, opacity: 0 }, 0.31)
  })
}

export const stakingAnimation = () => {
  const staking = document.getElementById('staking')
  let mm = gsap.matchMedia()

  mm.add('(min-width: 1024px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: staking,
          start: 'top 20%',
          end: '100% 0%',
          pin: true,
          scrub: 2,
          markers: true,
        },
      })
      .to('.rocket', { xPercent: -200 })
      .to('.rocket', { opacity: 0 })
      .from('.staking__main', {
        opacity: 0,
        x: -300,
      })
      .from('.js-staking-image-1', {
        opacity: 0,
        y: 100,
      })
      .from('.js-staking-image-2', {
        opacity: 0,
        y: 100,
      })
      .from('.js-staking-image-3', {
        opacity: 0,
        y: 100,
      })
  })

  mm.add('(max-width: 1023px)', () => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: staking,
          start: '-20% 0%',
          end: '100% 0%',
          toggleActions: 'play reset none none',
        },
      })
      .fromTo(
        '.staking__main',
        {
          opacity: 0,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
        },
      )
      .from('.js-staking-image-1', {
        opacity: 0,
        y: 100,
      })
      .from('.js-staking-image-2', {
        opacity: 0,
        y: 100,
      })
      .from('.js-staking-image-3', {
        opacity: 0,
        y: 100,
      })
  })
}

export const footerAnimation = () => {
  const community = document.getElementById('community')
  gsap
    .timeline(
      {
        scrollTrigger: {
          trigger: community,
          start: '-55% center',
        },
      },
      {
        defaults: {
          duration: 0.5,
          ease: Power1,
        },
      },
    )
    .to('.rocket', {
      xPercent: 100,
    })
    .from('.community__title', {
      opacity: 0,
      y: 20,
    })
    .from(
      '.community__text',
      {
        opacity: 0,
        y: 20,
      },
      '-=.4',
    )
    .from(
      '.social-list',
      {
        opacity: 0,
        y: 20,
      },
      '-=.4',
    )
    .from(
      '.footer__logo',
      {
        opacity: 0,
        y: 20,
      },
      '-=.4',
    )
    .from(
      '.footer__copyright',
      {
        opacity: 0,
        y: 20,
      },
      '-=.4',
    )
}
