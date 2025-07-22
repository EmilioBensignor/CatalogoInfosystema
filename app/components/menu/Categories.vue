<template>
    <div class="categoriesDropdown column">
        <button @click="isCategoriesOpen = !isCategoriesOpen" class="categoriesButton rowSpaceBetweenCenter">
            <span>Categorías</span>
            <Icon :class="isCategoriesOpen ? 'rotatedIcon' : ''" name="mingcute:down-line" />
        </button>
        <div class="dropdownContent" :class="isCategoriesOpen ? 'open' : ''">
            <ul class="column">
                <li v-for="categoria in categories" :key="categoria.id">
                    <NuxtLink :to="`/categorias/${categoria.slug}`">{{ categoria.nombre }}</NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            isCategoriesOpen: true,
        };
    },
}
</script>