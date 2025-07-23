<template>
  <article :class="producto.promocion ? 'productoPromocion' : ''" class="producto columnAlignCenter bg-white shadow-3"
    @click="$emit('showDetail', producto)">
    <div v-if="producto.promocion" class="promocion bg-black">
      <p>{{ producto.promocion }}% de descuento</p>
    </div>
    <div class="productoContent columnAlignCenter">
      <NuxtImg class="w-full" :src="producto.imagen" :alt="producto.titulo" />
      <p class="w-full codigo">{{ producto.codigo }}</p>
      <p class="w-full">{{ producto.titulo }}</p>
      <div class="w-full rowSpaceBetween align-items-end flex-wrap gap-2">
        <div class="precio-container">
          <p v-if="producto.promocion" class="precio-original font-bold text-gray">
            ${{ calculateOriginalPrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
          </p>
          <p class="font-bold">
            ${{ calculatePrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
          </p>
        </div>
        <p class="iva font-bold text-gray">IVA Incluído</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    producto: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      store: useVariablesStore(),
    }
  },
  methods: {
    calculateOriginalPrice(dolarCost) {
      const markup = this.producto.indice_markup || this.store.GANANCIA
      return Math.round(dolarCost * this.store.DOLAR_WG * markup * 1.21)
    },
    calculatePrice(dolarCost) {
      const markup = this.producto.indice_markup || this.store.GANANCIA
      let price = dolarCost * this.store.DOLAR_WG * markup
      
      if (this.producto.promocion) {
        price = price * (1 - this.producto.promocion / 100)
      }
      
      return Math.round(price * 1.21)
    }
  },
}
</script>

<style scoped>
.producto {
  width: 46.5%;
  max-width: 175px;
  justify-content: flex-end;
  border-radius: 7px;
  cursor: pointer;
}

.productoPromocion {
  justify-content: space-between;
}

.promocion {
  width: 100%;
  text-align: center;
  border-radius: 7px 7px 0 0;
  padding: 0.25rem;
}

.promocion p {
  font-size: 0.75rem !important;
}

.productoContent {
  gap: 0.625rem;
  padding: 0.625rem;
}

.precio-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.precio-original {
  text-decoration: line-through;
  font-size: 0.8em !important;
  margin-bottom: 0.2rem;
}

.producto>img {
  max-width: 150px;
}

.producto>p {
  font-size: 0.875rem;
}

.producto>div p {
  font-size: 1rem;
}

.producto>div p:last-of-type {
  font-size: 0.75rem;
}

.producto>div>.codigo {
  font-size: 0.7rem;
}

@media (width >=380px) {
  .producto>div p:last-of-type {
    font-size: 0.875rem;
  }

  .producto>div>.codigo {
    font-size: 0.75rem;
  }
}

@media (width >=660px) {
  .producto {
    width: 31%;
    max-width: 200px;
  }

  .promocion p {
    font-size: 0.875rem !important;
  }

  .productoContent {
    gap: 0.625rem;
    padding: 1.25rem;
  }

  .producto>div p {
    font-size: 1.25rem;
  }

  .producto>div p:last-of-type {
    font-size: 1rem;
  }

  .producto>div>.codigo {
    font-size: 1rem;
  }

  .producto>p {
    font-size: 1rem
  }
}

@media (width >=1080px) {
  .producto {
    max-width: 100%;
    width: 100%;
  }

  .promocion p {
    font-size: 1rem !important;
  }

  .producto img {
    max-width: 170px;
    max-height: 170px;
    object-fit: contain;
  }

  .producto>div p {
    font-size: 1.5rem;
  }

  .producto>div p:last-of-type {
    font-size: 1.25rem;
  }

  .producto>div>.codigo {
    font-size: 1.25rem;
  }
}

@media (width >=1440px) {
  .promocion p {
    font-size: 1.25rem !important;
  }

  .producto>p {
    font-size: 1.25rem;
  }
}
</style>
