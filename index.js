



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
