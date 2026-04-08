// Seleciona o botão de toggle e o elemento body
const toggleButton = document.createElement('button');
toggleButton.style.position = 'absolute';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = 'transparent'; /* Fundo transparente para o botão */
toggleButton.style.border = 'none'; /* Remove a borda do botão */
toggleButton.style.fontSize = '20px'; /* Define o tamanho da fonte para os ícones */
toggleButton.style.lineHeight = '1';
toggleButton.textContent = '🌙'; /* Ícone inicial de lua */

document.body.appendChild(toggleButton);

// Adiciona o evento de clique ao botão
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙'; /* Alterna entre sol e lua */
});

// Define os estilos para o modo claro no CSS
const style = document.createElement('style');
style.textContent = `
    body.light-mode {
        background-color: #ffffff; /* Fundo branco para o modo claro */
        color: #000000; /* Texto preto para o modo claro */
    }

    body.light-mode .profile img {
        border-color: #000000; /* Altera a borda das imagens no modo claro */
    }
`;

document.head.appendChild(style);