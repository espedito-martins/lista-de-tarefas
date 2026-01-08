const URL_BASE = 'http://localhost:3000'

const api = {

    async buscartarefas() {
        try {
            const resposta = await axios.get(`${URL_BASE}/tarefas`)
            return resposta.data
        } catch (error) {
            alert('Erro ao carregar tarefas!')
            return []
        }
    },

    async cadastrarTarefa(tarefa) {

        try {

            const resposta = await axios.post(`${URL_BASE}/tarefas`, tarefa)
            return resposta.data

        } catch (error) {
            alert('Erro ao cadastrar tarefa!')
        }

    },

    async deletarTarefa(id) {

        try {

            const resposta = await axios.delete(`${URL_BASE}/tarefas/${id}`)

        } catch (error) {
            alert("Erro ao deletar tarefa!")
        }

    },

    async buscarTarefasPorId(id) {

        try {

            const resposta = await axios.get(`${URL_BASE}/tarefas/${id}`)
            const tarefa = resposta.data

            return tarefa

        } catch (error) {
            alert('ERro ao buscar tarefa por ID!')
        }

    },

    async alterarTarefa(tarefa) {

        try {

            const resposta = await axios.put(`${URL_BASE}/tarefas/${tarefa.id}`, tarefa)
            return resposta.data

        } catch (error) {
            alert('Erro ao alterar tarefa!')
        }

    },

    async alterarStatus(id, status) {

        try {
            await axios.patch(`${URL_BASE}/tarefas/${id}`, { status })
        } catch (error) {
            alert('Erro ao alterar status!')
        }

    },

    async filtrarPorTermo(termo) {

        try {

            const tarefa = await this.buscartarefas()
            const termoMaiusculo = termo.toUpperCase()
            const tarefasFiltradas = tarefa.filter((tarefa) => {
                return (tarefa.titulo.toUpperCase().includes(termoMaiusculo) ||
                    tarefa.descricao.toUpperCase().includes(termoMaiusculo))
            })
            return tarefasFiltradas

        } catch (error) {
            alert('Erro ao filtrar Tarefas!')
        }

    }


}

export default api