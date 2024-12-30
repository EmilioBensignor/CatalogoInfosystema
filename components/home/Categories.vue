<template>
    <div class="w-full categories columnAlignCenter">
        <h2>Categorías</h2>
        <div class="w-full rowCenter">
            <NuxtLink :to="`/categories/${category.route}`" v-for="(category, index) in categories" :key="index" class="category columnAlignCenter no-underline">
                <div class="allCenter bg-white">
                    <NuxtImg class="w-full" :src="`/images/categories/${category.img}.png`" :alt="category.name" />
                </div>
                <p class="text-white">{{ category.name }}</p>
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

.categories > div {
    gap: 0.625rem;
    overflow-x: auto;
    white-space: nowrap;
}

.category {
    gap: 0.5rem;
}

.category > div {
    width: 4.688rem;
    height: 4.688rem;
    border-radius: 7px;
}
</style>