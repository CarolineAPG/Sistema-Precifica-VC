'use strict'

const openModal = () => document.getElementById('modal')
    .clasList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "iarroz",
    quantidade: "160g",
    preço: "13,00"
}
//evento
const createClient = (client) => {
    const db_client = JSON.parse(localStorage.getItem('db_client'))
    db_client.push(client)
    localStorage.setItem("db_client", JSON.stringify(db_client))
}

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)