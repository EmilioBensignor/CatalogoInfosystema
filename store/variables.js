export const useVariablesStore = defineStore('variables', {
    state: () => ({
        variables: [],
        loading: false,
        error: null
    }),

    getters: {
        getVariables: (state) => state.variables,
        isLoading: (state) => state.loading,
        DOLAR_WG: (state) => {
            const dolar = state.variables.find(v => v.nombre === 'DOLAR_WG')
            return dolar ? parseFloat(dolar.valor) : 0
        },
        GANANCIA: (state) => {
            const ganancia = state.variables.find(v => v.nombre === 'GANANCIA')
            return ganancia ? parseFloat(ganancia.valor) : 0
        },
    },

    actions: {
        async fetchVariables() {
            this.loading = true
            try {
                const supabase = useSupabaseClient()
                const { data, error } = await supabase
                    .from('variables')
                    .select('*')
                if (error) throw error

                this.variables = data
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        }
    }
})