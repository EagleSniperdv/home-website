const navbar = document.querySelector('#navbar');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu');

menu.addEventListener('click',() => {
    navbar.classList.add('active');
});

close.addEventListener('click', () => {
    navbar.classList.remove('active');
});

// website animation

gsap.from('.home-text', {
    duration: 1,
    y:200,
    opacity:0
});

gsap.from('.contact-us',{
    opacity: 0,
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger:'.contact-us',
        start:'top 80%',
        end:'top50%',
        toggleActions:'play none none none'
    }
});

gsap.from('.de-box',{
    opacity: 0,
    y: 300,
    duration: 1,
    scrollTrigger: {
        trigger:'.de-box',
        start:'top 80%',
        end:'top50%',
        toggleActions:'play none none none'
    }
});