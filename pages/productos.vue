<template>
  <main>
    <section class="columnAlignCenter">
      <h1 class="text-center">Nuestros Productos</h1>
      <div class="productosContainer">
        <InfoProductCard :producto="producto" v-for="(producto, index) in store.productos" :key="index" @showDetail="openDetail"  />
        <InfoProductDetail :visible="dialogVisible" :producto="selectedProduct"
          @update:visible="dialogVisible = $event" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      store: useProductosStore(),
      dialogVisible: false,
      selectedProduct: null,
    };
  },
  methods: {
    openDetail(producto) {
      this.selectedProduct = producto;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
@media (width >=660px) {
  h1 {
    width: 100%;
    text-align: start !important;
  }
}
</style>