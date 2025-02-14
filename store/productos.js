export const useProductosStore = defineStore('productos', {
    state: () => ({
        productos: [],
        loading: false,
        error: null
    }),

    getters: {
        getProductos: (state) => state.productos,
        isLoading: (state) => state.loading,
        getProductosByCategoria: (state) => (categoriaSlug) => {
            return state.productos.filter(producto => producto.categoria === categoriaSlug)
        }
    },

    actions: {
        async fetchProductos() {
            this.loading = true
            try {
                const supabase = useSupabaseClient()
                const { data, error } = await supabase
                    .from('productos')
                    .select('*, categoria:categorias(*)')
                if (error) throw error

                this.productos = data.filter(producto => !producto.oculto)
            } catch (error) {
                this.error = error.message
            } finally {
                this.loading = false
            }
        }
    }
})
