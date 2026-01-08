import ui from "./ui.js";
import api from "./api.js";

console.log("main.js carregou")

const formulario = document.querySelector('#task-form')

ui.renderizarTarefas()

formulario.addEventListener('submit', async (evento) => {

    evento.preventDefault()

    const titulo = document.querySelector('#title').value
    const descricao = document.querySelector('#description').value
    const prioridade = document.querySelector('#priority').value
    const status = document.querySelector('#status').value

    await api.cadastrarTarefa({titulo, descricao, prioridade, status})

    await ui.renderizarTarefas()

})