// REVEAL ANIMATION

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight = window.innerHeight;

        const revealTop = reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            reveal.classList.add('active');

        }

    });

});

// FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});

// NEWSLETTER

const newsletter = document.querySelector('.newsletter-form');

newsletter.addEventListener('submit', (e) => {

    e.preventDefault();

    alert('Email cadastrado com sucesso!');

});

// EFEITO HEADER

const header = document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(2,8,23,0.95)";

    }else{

        header.style.background = "rgba(2,8,23,0.7)";

    }

});

// EFEITO HOVER 3D NOS CARDS

const cards = document.querySelectorAll(
'.beneficio-card, .valor-card, .depoimento-card'
);

cards.forEach(card => {

    card.addEventListener('mousemove', (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);

        const rotateY = ((centerX - x) / 20);

        card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        "rotateX(0) rotateY(0) translateY(0)";

    });

});

// LOADING SCREEN

window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');

    if(loader){

        loader.classList.add('loader-hidden');

    }

});

// BOTÃO SCROLL SUAVE

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});