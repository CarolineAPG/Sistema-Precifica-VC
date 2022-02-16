'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

  //se const db_client nao tiver nada (??) então mande nada []
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

//delet:
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

//update:
const updateClient = (index, client) => {
      const dbClient = readClient()
      dbClient[index] = client
      setLocalStorage(dbClient)
}


//Read : essa função lê o dado cadastrado
const readClient = () => getLocalStorage()



//CRUD Create
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
    
}

const isValidFields = ()=> {
    return document.getElementById("form").reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.Value = "")
}

//interação com layout
const saveClient = () => {
    if (isValidFields()){
        const client= {
        nome: document.getElementById('nome').Value,
        quantidade: document.getElementById('quantidade').Value,
        preço: document.getElementById('preço').Value
    }
    createClient(client)
    closeModal()
    }
}

const createRow = (client) => {
      const newRow = document.createElement('tr')
      newRow.innerHTML = `
      <td>${client.nome}</td>
      <td>${client.quantidade}</td>
      <td>${client.preço}</td>
      <td>
          <button type="button" class="button green">editar</button>
          <button type="button" class="button red">excluir</button>
      </td>
      `
      document.querySelector("#tableClient>tbody").appendChild(newRow)
}

const updateTable = () =>{
    const dbClient = readClient()
    dbClient.forEach(createRow)
}

updateTable()

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('Salvar')
         .addEventListener('click', saveClient)