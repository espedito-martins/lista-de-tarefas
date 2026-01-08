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

    }
}

export default api