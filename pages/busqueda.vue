<template>
    <main>
        <section>
            <div class="w-full busqueda">
                <p>Productos relacionados con</p>
                <h1>{{ capitalize(searchQuery) }}</h1>
            </div>
            <div v-if="filteredProducts.length === 0" class="text-center">
                No se encontraron productos relacionados con tu búsqueda
            </div>
            <div v-else class="productosContainer">
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
import { capitalize } from 'vue';
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { productos } from '~/shared/productos';

export default {
    data() {
        return {
            routes: ROUTE_NAMES,
            productos: productos,
            searchQuery: '',
            dialogVisible: false,
            selectedProduct: null,
        }
    },

    watch: {
        '$route.query.q': {
            immediate: true,
            handler(newQuery) {
                this.searchQuery = newQuery || ''
            }
        }
    },

    computed: {
        filteredProducts() {
            if (!this.searchQuery) return this.productos

            const query = this.normalizeText(this.searchQuery.toLowerCase())

            return this.productos.filter(producto => {
                const titleNormalized = this.normalizeText(producto.title.toLowerCase())
                const descriptionNormalized = producto.description ?
                    this.normalizeText(producto.description.toLowerCase()) : ''

                return titleNormalized.includes(query) ||
                    descriptionNormalized.includes(query)
            })
        }
    },

    methods: {
        capitalize,
        openDetail(producto) {
            this.selectedProduct = producto;
            this.dialogVisible = true;
        },
        normalizeText(text) {
            return text.normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-zA-Z0-9\s]/g, '')
        }
    }
}
</script>

<style scoped>
@media (width >=1080px) {
    .busqueda p {
        font-size: 1.25rem;
    }
}

@media (width >=1440px) {
    .busqueda p {
        font-size: 1.5rem;
    }
}
</style>