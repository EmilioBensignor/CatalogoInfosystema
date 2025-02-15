<template>
    <main>
        <section v-if="categoriaActual">
            <div class="w-full">
                <h1>Categoría {{ categoriaActual.nombre }}</h1>
            </div>
            <div class="productosContainer">
                <InfoProductCard v-for="(producto, index) in filteredProducts" :producto="producto"
                    :key="producto.id || index" @showDetail="openDetail" />
                <p v-if="filteredProducts.length === 0">
                    No hay productos en esta categoría
                </p>
                <InfoProductDetail :visible="dialogVisible" :producto="selectedProduct"
                    @update:visible="dialogVisible = $event" />
            </div>
            <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">
                Ver todos los productos
            </NuxtLink>
        </section>
        <section v-else>
            <h1>Categoría no encontrada</h1>
            <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">
                Volver a productos
            </NuxtLink>
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
        try {
            // Cargar categorías si no están cargadas
            if (this.categoriasStore.categorias.length === 0) {
                await this.categoriasStore.fetchCategorias()
            }

            // Cargar productos si no están cargados
            if (this.productosStore.productos.length === 0) {
                await this.productosStore.fetchProductos()
            }
        } catch (error) {
            console.error('Error loading data:', error)
        }
    }
}
</script>

<style scoped>
section {
    min-height: 65.2vh;
}

@media (width >=660px) {
    section {
        min-height: 63.6dvh;
    }
}

@media (width >=1080px) {
    section {
        min-height: 66dvh;
    }
}

@media (width >=1440px) {
    section {
        min-height: 64dvh;
    }
}
</style>