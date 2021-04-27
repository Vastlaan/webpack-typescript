import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {splitText} from './helpers'

// ANIMATIONS
gsap.registerPlugin(ScrollTrigger);
// navigation
const tlNav = gsap.timeline()
const navigationLogo = document.querySelector('.logo-primary')
const navigationLinks = document.querySelectorAll('.nav__links > a')
const navigationSocial = document.querySelectorAll('.nav__lang > i')
tlNav.from(navigationLogo, {x: -200, autoAlpha: 0, ease: 'bounce', duration: .3})
tlNav.from(navigationLinks, {y: -100, autoAlpha: 0, stagger: .2, ease: 'power2'})
tlNav.from(navigationSocial, {scale: .2, autoAlpha: 0, stagger: .1, ease: 'bounce'})

// cta-info
const infoDetails = document.querySelectorAll('.cta-info__link')
tlNav.from(infoDetails, {y: 20, autoAlpha: 0, stagger: .2, ease: 'power2'})
// landing header
const tlLandHead = gsap.timeline()
const landingHeaderMain = splitText('#landing-heading-main-header')
tlLandHead.from(landingHeaderMain.words, {autoAlpha: 0, y: 100, stagger: .2 })
const landingHeaderPara = document.querySelector('#landing-heading-main-para')
tlLandHead.from(landingHeaderPara, {autoAlpha: 0, y: 100, duration: .3 })
const landingHeaderButtons = document.querySelectorAll('.header__info--buttons > button')
tlLandHead.from(landingHeaderButtons, {autoAlpha: 0, y:100, stagger: .1, duration: .3, ease: 'power0'})
const landingHeaderPhoto = document.querySelector('.header__photo')
tlLandHead.from(landingHeaderPhoto, {autoAlpha: 0, y: 100, duration: .3 })
const landingHeaderPhotoImage = document.querySelector('.header__photo--box > img')
tlLandHead.from(landingHeaderPhotoImage, {scale: 1.2, duration: 10 })

// landing Info section
const infoSection = document.querySelector('.info')
gsap.from(infoSection, {autoAlpha: 0, x: '100%', duration: 1, scrollTrigger:{
  trigger: infoSection!,
  start: "top bottom",
  toggleActions: "restart none none reset",
}})