const URL_BASE = 'http://localhost:3000'


const api = {

    async buscartarefas(){

        try {
            const tarefas = await axios.get(`${URL_BASE}/tarefas`)
            return tarefas.data.map(tarefas => {
                return {
                    ...tarefas,
                    criadoEm: new Date(tarefas.data),
                    atualizadoEm: new Date(tarefas.data),
                    concluidoEm: new Date(tarefas.data)
                }
            })
        } catch (error) {
            return alert('Erro ao carregar tarefas!')
        }

    }

}

export default api