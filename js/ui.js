import api from "./api.js"

const listaTarefas = document.querySelector('#task-list')

const ui = {
    async renderizarTarefas(lista = null) {
        try {
            let tarefas

            if (lista) {
                tarefas = lista
            } else {
                tarefas = await api.buscartarefas()
            }

            listaTarefas.innerHTML = ''

            tarefas.forEach((tarefa) => this.criarItemTarefa(tarefa))
        } catch (error) {
            alert(error)
        }
    },

    criarItemTarefa(tarefa) {
        const listaTarefas = document.getElementById("task-list")

        const li = document.createElement("li")
        li.setAttribute("data-task-id", tarefa.id)
        li.classList.add("tarefa")

        if (tarefa.status === "concluida") {
            li.classList.add("tarefa--concluida")
        }

        const colunaEsquerda = document.createElement("div")
        colunaEsquerda.classList.add("tarefa__esquerda")

        const metadados = document.createElement("div")
        metadados.classList.add("tarefa__metadados")

        const seloStatus = document.createElement("span")
        seloStatus.classList.add("selo", "selo--status")

        if (tarefa.status === 'pendente') {
            seloStatus.classList.add('selo--pendente')
            seloStatus.textContent = 'Pendente'
        } else {
            seloStatus.classList.add('selo--concluida')
            seloStatus.textContent = 'Concluída'
        }

        const seloPrioridade = document.createElement("span")
        seloPrioridade.classList.add("selo", "selo--prioridade")

        if (tarefa.prioridade === 'alta') {
            seloPrioridade.classList.add("selo--alta")
            seloPrioridade.textContent = "Alta"
        } else if (tarefa.prioridade === 'media') {
            seloPrioridade.classList.add("selo--media")
            seloPrioridade.textContent = "Média"
        } else {
            seloPrioridade.classList.add("selo--baixa")
            seloPrioridade.textContent = "Baixa"
        }

        const titulo = document.createElement("h3")
        titulo.classList.add("tarefa__titulo")
        titulo.textContent = tarefa.titulo

        const descricao = document.createElement("p")
        descricao.classList.add("tarefa__descricao", "texto-suave")
        descricao.textContent = tarefa.descricao

        const acoes = document.createElement("div")
        acoes.classList.add("tarefa__acoes")

        const botaoToggle = document.createElement("button")
        botaoToggle.classList.add("botao", "botao--suave")
        botaoToggle.type = "button"
        botaoToggle.setAttribute("data-action", "toggle")
        botaoToggle.textContent = "Alterar status"

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao")
        botaoEditar.type = "button"
        botaoEditar.setAttribute("data-action", "edit")
        botaoEditar.textContent = "Editar"

        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao", "botao--perigo")
        botaoExcluir.type = "button"
        botaoExcluir.setAttribute("data-action", "delete")
        botaoExcluir.textContent = "Excluir"

        botaoExcluir.onclick = async () => {
            try {
                await api.deletarTarefa(tarefa.id)
                ui.renderizarTarefas()
            } catch (error) {
                alert("Erro ao excluir Tarefa!")
            }
        }

        metadados.appendChild(seloStatus)
        metadados.appendChild(seloPrioridade)

        colunaEsquerda.appendChild(metadados)
        colunaEsquerda.appendChild(titulo)
        colunaEsquerda.appendChild(descricao)

        acoes.appendChild(botaoToggle)
        acoes.appendChild(botaoEditar)
        acoes.appendChild(botaoExcluir)

        li.appendChild(colunaEsquerda)
        li.appendChild(acoes)
        listaTarefas.appendChild(li)
    }
}

export default ui