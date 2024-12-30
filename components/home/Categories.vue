<template>
    <div class="w-full categories columnAlignCenter">
        <h2>Categorías</h2>
        <div class="w-full rowCenter">
            <NuxtLink v-for="(category, index) in categories" :key="index">
                {{ category.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script>
import { categories } from '~/shared/categories';
export default {
    data() {
        return {
            categories,
        };
    }
}
</script>

<style scoped>
.categories {
    gap: 1.25rem;
}
</style>