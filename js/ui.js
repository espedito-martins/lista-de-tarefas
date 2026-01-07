
import api from "./api.js"

const listaTarefas = document.querySelector('#task-list')

const ui = {

    async renderizarTarefas(listaTarefas = null){
        try {
            let tarefas

            tarefas = await api.buscartarefas()

            listaTarefas.innerHTML = ''

            tarefas.forEach( this.criartarefa )

        } catch (error) {
            alert(error)
        }
    }

}