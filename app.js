'use strict';

let banco =
    [
        { 'compra': 'Cenoura', 'status': '' },
        { 'compra': 'Xuxu', 'status': 'checked' },
        { 'compra': 'Beterraba', 'status': '' }
    ]
const criaritem = (compra, status) => {
    const item = document.createElement('label')
    item.classList.add('compra__item')
    item.innerHTML = `<input type="checkbox" ${status}>
    <div>${compra}</div>
    <input type="button" value="X">
    `
    document.getElementById('listacompra').appendChild(item)
}
const att = () => {
    limparcompra()
    banco.forEach(item => criaritem(item.compra, item.status))
}
const inserir = (evento) => {
    const teclado = evento.key
    if (tecla === 'Enter') {
        banco.push({ 'compra': 'Beterraba', 'status': '' })
    }
}
document.getElementById('novoitem').addEventListener('keypress', inserir)
//em construção.
