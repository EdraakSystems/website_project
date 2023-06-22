const primaryHeader = document.querySelector('.primary_header')
const navToggle = document.querySelector('.mob_nav_toggle')
const primaryNav = document.querySelector('.primary_nav')

navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible') ? navToggle.setAttribute('aria-expanded', false) : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})

const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {

        480: {
            dots: false, // dots enabled below 480
        },
    },
});