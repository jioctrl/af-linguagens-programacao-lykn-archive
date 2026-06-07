/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Site sobre o grupo de T-pop LYKN
Aluno: Giovana Fernandes Zorzenone - RA: 251804
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/


// Scroll pro menu sumir/aparecer
let ultimoScroll = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollAtual = window.pageYOffset;

    if (scrollAtual > ultimoScroll) {
        header.classList.add("header-escondido");
    } else {
        header.classList.remove("header-escondido");
    }

    ultimoScroll = scrollAtual;
});

// Menu hamburger em telas menores
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("ativo");
    });
}


// Botão de voltar ao topo
const btnTopo = document.querySelector('#btnTopo');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        btnTopo.classList.add('mostrar');
    } else {
        btnTopo.classList.remove('mostrar');
    }
});

btnTopo.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Formulario
const formulario = document.querySelector('#formContato');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.querySelector('#nome').value;
        const email = document.querySelector('#email').value;
        const mensagem = document.querySelector('#mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha os campos obrigatórios.');
        } else {
            alert('Mensagem enviada com sucesso!');
            formulario.reset();
        }
    });
}

// Carrossel membros
const cmembros = document.querySelector('.carrossel-membros');

const slides = document.querySelectorAll(".slides, .slide-ativo");
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

if (cmembros && btnProximo && btnAnterior) {
let slideAtual = 0;

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("slide-ativo");
        slide.classList.add("slides");
    });

    slides[indice].classList.remove("slides");
    slides[indice].classList.add("slide-ativo");
}

btnProximo.addEventListener("click", () => {
    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
});

btnAnterior.addEventListener("click", () => {
    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
});
}

// Botão pra expandir os lançamentos
const botao = document.getElementById("toggleLancamentos");

if (botao) {
    const cardsExtras = document.querySelectorAll(
        ".comeback-card:nth-child(n+7)"
    );

    botao.addEventListener("click", () => {
        cardsExtras.forEach(card => {
            card.classList.toggle("oculto");
        });

        botao.textContent =
            botao.textContent === "Ver todos os lançamentos →"
                ? "Mostrar menos ←"
                : "Ver todos os lançamentos →";
    });

}