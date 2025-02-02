// Define o offset desejado
const offset = 70; // Altura em pixels (ajuste conforme necessário)

// Captura todos os links que possuem href começando com "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão do clique

        // Identifica o elemento de destino pelo ID
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Calcula a posição correta com o offset
            const targetPosition = target.offsetTop - offset;

            // Faz o scroll suave
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    });
});

const InfoAnabolismo = document.querySelector('.anabolismo');
const InfoCatabolismo = document.querySelector(".catabolismo");

const botaoDireitaCatabolismo = document.getElementById('flechaDireita-catabolismo');
const botaoEsquerdaCatabolismo = document.getElementById('flechaEsquerda-catabolismo');
const botaoDireitaAnabolismo = document.getElementById('flechaDireita-anabolismo');
const botaoEsquerdaAnabolismo = document.getElementById('flechaEsquerda-anabolismo');

InfoAnabolismo.style.display = "none";
InfoCatabolismo.style.display = "none";

botaoEsquerdaCatabolismo.style.display = "none";
botaoEsquerdaAnabolismo.style.display = "none";


function alternarExibicao(infoElemento, botaoDireita, botaoEsquerda, mostrar) {
    if (mostrar) {
        infoElemento.style.display = "block";
        botaoEsquerda.style.display = "block";
        botaoDireita.style.display = "none";
    } else {
        infoElemento.style.display = "none";
        botaoEsquerda.style.display = "none";
        botaoDireita.style.display = "block";
    }
}

// Funções de Catabolismo
botaoDireitaCatabolismo.addEventListener("click", function () {
    alternarExibicao(InfoCatabolismo, botaoDireitaCatabolismo, botaoEsquerdaCatabolismo, true);
});
botaoEsquerdaCatabolismo.addEventListener("click", function () {
    alternarExibicao(InfoCatabolismo, botaoDireitaCatabolismo, botaoEsquerdaCatabolismo, false);
});

// Funções de Anabolismo
botaoDireitaAnabolismo.addEventListener("click", function () {
    alternarExibicao(InfoAnabolismo, botaoDireitaAnabolismo, botaoEsquerdaAnabolismo, true);
});
botaoEsquerdaAnabolismo.addEventListener("click", function () {
    alternarExibicao(InfoAnabolismo, botaoDireitaAnabolismo, botaoEsquerdaAnabolismo, false);
});

const infoAutotrofos = document.querySelector('.autotrofos');
const infoHeterotrofos = document.querySelector('.heterotrofos');

const botaoDireitaAutotrofos = document.getElementById('flechaDireita-autotrofos');
const botaoEsquerdaAutotrofos = document.getElementById('flechaEsquerda-autotrofos');
const botaoDireitaHeterotrofos = document.getElementById('flechaDireita-heterotrofos');
const botaoEsquerdaHeterotrofos = document.getElementById('flechaEsquerda-heterotrofos');

// Inicialmente, esconde os botões de esquerda e os textos
infoAutotrofos.style.display = 'none';
infoHeterotrofos.style.display = 'none';

botaoEsquerdaAutotrofos.style.display = 'none';
botaoEsquerdaHeterotrofos.style.display = 'none';

// Função para alternar exibição
function alternarExibicao(infoElemento, botaoDireita, botaoEsquerda, mostrar) {
    if (mostrar) {
        infoElemento.style.display = 'inline';
        botaoEsquerda.style.display = 'inline';
        botaoDireita.style.display = 'none';
    } else {
        infoElemento.style.display = 'none';
        botaoEsquerda.style.display = 'none';
        botaoDireita.style.display = 'inline';
    }
}

// Eventos para os botões de Autótrofos
botaoDireitaAutotrofos.addEventListener('click', function () {
    alternarExibicao(infoAutotrofos, botaoDireitaAutotrofos, botaoEsquerdaAutotrofos, true);
});
botaoEsquerdaAutotrofos.addEventListener('click', function () {
    alternarExibicao(infoAutotrofos, botaoDireitaAutotrofos, botaoEsquerdaAutotrofos, false);
});

// Eventos para os botões de Heterótrofos
botaoDireitaHeterotrofos.addEventListener('click', function () {
    alternarExibicao(infoHeterotrofos, botaoDireitaHeterotrofos, botaoEsquerdaHeterotrofos, true);
});
botaoEsquerdaHeterotrofos.addEventListener('click', function () {
    alternarExibicao(infoHeterotrofos, botaoDireitaHeterotrofos, botaoEsquerdaHeterotrofos, false);
});
