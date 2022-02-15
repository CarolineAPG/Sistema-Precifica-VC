'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "ingrediente1",
    quantidade: "150g",
    preço: "13,00"
}
 //evento
 const createClient = (client) => {
   localStorage.setItem("name", "quantidade")
 }

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)