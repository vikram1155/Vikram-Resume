/*show menu*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*active and remove menu*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1200,
    reset: true
});

sr.reveal(`.sectionn-title, .section-title, .sectionnn-title, .home__data, .home__title, .about__text. .about__img, .skills__data, .skills__img, .work__img, .work__text,
.home__img,.about__container, .contact__input,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})
