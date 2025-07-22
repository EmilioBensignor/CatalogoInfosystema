<template>
  <section class="columnAlignCenter">
    <h2>Productos destacados</h2>
    <div class="productosContainer">
      <InfoProductCard v-for="(producto, index) in productosDestacados" :producto="producto" :key="index"
        @showDetail="openDetail" />
    </div>
    <h2>Los más vendidos</h2>
    <div class="productosContainer">
      <InfoProductCard v-for="(producto, index) in productosMasVendidos" :producto="producto" :key="index"
        @showDetail="openDetail" />
    </div>
    <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">Ver todos los productos</NuxtLink>
    <InfoProductDetail :visible="dialogVisible" :producto="selectedProduct" @update:visible="dialogVisible = $event" />
  </section>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      store: useProductosStore(),
      dialogVisible: false,
      selectedProduct: null,
    };
  },
  computed: {
    productosDestacados() {
      return this.store.getProductos.filter(producto => producto.destacado);
    },
    productosMasVendidos() {
      return this.store.getProductos.filter(producto => producto.mas_vendido);
    },
  },
  methods: {
    openDetail(producto) {
      this.selectedProduct = producto;
      this.dialogVisible = true;
    }
  }
};
</script>