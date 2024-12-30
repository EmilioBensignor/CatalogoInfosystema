<template>
    <p>{{ categories.name }}</p>
</template>

<script>
import { categories } from '~/shared/categories';

export default {
    data() {
        return {
            categories,
        };
    },
}
</script>