<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const productosStore = useProductosStore()
const variablesStore = useVariablesStore()

await productosStore.fetchProductos()
await variablesStore.fetchVariables()
</script>