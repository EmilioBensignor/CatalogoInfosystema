<template>
    <main>
        <section>
            <div class="w-full">
                <h1>Categoría {{ categoriaActual.nombre }}</h1>
            </div>
            <div class="productosContainer">
                <InfoProductCard :producto="producto" v-for="(producto, index) in filteredProducts"
                    :key="producto.id || index" @showDetail="openDetail" />
                <InfoProductDetail :visible="dialogVisible" :producto="selectedProduct"
                    @update:visible="dialogVisible = $event" />
            </div>
            <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">Ver todos los productos</NuxtLink>
        </section>
    </main>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES'

export default {
    data() {
        return {
            routes: ROUTE_NAMES,
            productosStore: useProductosStore(),
            categoriasStore: useCategoriasStore(),
            dialogVisible: false,
            selectedProduct: null,
            searchQuery: '',
        }
    },

    computed: {
        categoriaActual() {
            return this.categoriasStore.categorias.find(
                cat => cat.slug === this.$route.params.slug
            )
        },

        filteredProducts() {
            const categoriaProducts = this.productosStore.getProductosByCategoria(this.$route.params.slug)
            
            if (!this.searchQuery) return categoriaProducts

            const query = this.normalizeText(this.searchQuery.toLowerCase())
            
            return categoriaProducts.filter(producto => {
                const titleNormalized = this.normalizeText(producto.titulo.toLowerCase())
                const descriptionNormalized = producto.description ?
                    this.normalizeText(producto.description.toLowerCase()) : ''

                return titleNormalized.includes(query) ||
                    descriptionNormalized.includes(query)
            })
        }
    },

    methods: {
        openDetail(producto) {
            this.selectedProduct = producto
            this.dialogVisible = true
        },
        normalizeText(text) {
            return text.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9\s]/g, '')
        }
    },

    async created() {
        if (this.categoriasStore.categorias.length === 0) {
            await this.categoriasStore.fetchCategorias()
        }
    }
}
</script>