

function enviarWhats(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5511949073765'

    const texto = `Olá Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURI(texto)

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`

    console.log(url)
    window.open(url, '_blank')
}



// Funcionalidade do botão de abrir/fechar menu
document.addEventListener('DOMContentLoaded', () => {
    const btnAbrir = document.getElementById('btn-menu');
    const btnFechar = document.getElementById('btn-fechar');
    const menuMobile = document.getElementById('menu-mobile');
    const overlay = document.getElementById('overlay');

    btnAbrir.addEventListener('click', () => {
        menuMobile.classList.add('open-menu');
        overlay.classList.add('active');
        btnAbrir.style.display = 'none'; // esconde o botão ☰
    });

    const fecharMenu = () => {
        menuMobile.classList.remove('open-menu');
        overlay.classList.remove('active');
        btnAbrir.style.display = 'block'; // mostra o botão ☰
    }

    btnFechar.addEventListener('click', fecharMenu);
    overlay.addEventListener('click', fecharMenu);
});


