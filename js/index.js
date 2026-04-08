console.log('index.js carregado com sucesso!');

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil; // Atualiza o nome do perfil
        if (profileIcon) profileIcon.src = imagemPerfil; // Atualiza a imagem do perfil
    }
});