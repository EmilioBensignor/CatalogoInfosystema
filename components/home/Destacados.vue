<template>
  <section class="columnAlignCenter">
    <h2>PRODUCTOS DESTACADOS</h2>
    <div class="productosContainer">
      <InfoProductCard 
        :producto="producto" 
        v-for="(producto, index) in productosDestacados" 
        :key="index"
        @showDetail="openDetail" 
      />
    </div>
    <NuxtLink :to="routes.PRODUCTOS" class="primaryButton">Ver todos los productos</NuxtLink>
    <InfoProductDetail 
      :visible="dialogVisible"
      :producto="selectedProduct"
      @update:visible="dialogVisible = $event"
    />
  </section>
</template>

<script>
import { ROUTE_NAMES } from '~/constants/ROUTE_NAMES';
import { productos } from '~/shared/productos';

export default {
  data() {
    return {
      routes: ROUTE_NAMES,
      productos,
      dialogVisible: false,
      selectedProduct: null,
    };
  },
  computed: {
    productosDestacados() {
      return this.productos.filter(producto => producto.destacado);
    }
  },
  methods: {
    openDetail(producto) {
      this.selectedProduct = producto;
      this.dialogVisible = true;
    }
  }
};
</script>