/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: Site sobre o grupo de T-pop LYKN
Aluno: Giovana Fernandes Zorzenone - RA: 251804
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

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
const slides = document.querySelectorAll(".slide, .slide-ativo");
const btnAnterior = document.querySelector(".anterior");
const btnProximo = document.querySelector(".proximo");

let slideAtual = 0;

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("slide-ativo");
        slide.classList.add("slide");
    });

    slides[indice].classList.remove("slide");
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