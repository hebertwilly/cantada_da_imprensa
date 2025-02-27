// Lista de imagens das cantadas
const cantadas = [
    "imagens/cantada1.jpeg",
    "imagens/cantada2.jpg",
    "imagens/cantada3.jpg",
    "imagens/cantada4.jpg",
    "imagens/cantada5.jpg",
    "imagens/cantada6.jpeg",
    "imagens/cantada7.jpeg",
    "imagens/cantada8.jpg",
    "imagens/cantada9.jpeg",
    "imagens/cantada10.jpg",
    "imagens/cantada11.jpg",
    "imagens/cantada12.jpeg",
];

// Função para exibir uma cantada aleatória ao carregar a página
window.onload = () => {
    const img = document.getElementById("cantada-img");
    const randomIndex = Math.floor(Math.random() * cantadas.length);
    img.src = cantadas[randomIndex];
};