<template>
    <div>
        <Dialog :visible="visible" @update:visible="$emit('update:visible', $event)" modal :dismissableMask="true"
            class="dialogDetail">
            <div class="dialogBody columnAlignCenter">
                <NuxtImg class="w-full cursor-pointer" :src="producto?.imagen" :alt="producto?.titulo"
                    @click="mostrarImagenAmpliada = true" />
                <div class="w-full columnAlignCenter">
                    <p class="w-full">{{ producto?.codigo }}</p>
                    <p class="w-full dialogBig font-bold">{{ producto?.titulo }}</p>
                    <p class="w-full">{{ producto?.descripcion }}</p>
                    <p v-if="producto.cantidad_bulto" class="w-full">Cantidad por bulto: {{ producto.cantidad_bulto }}
                    </p>
                    <p v-if="producto.cantidad_minima" class="w-full">Cantidad mínima: {{ producto.cantidad_minima }}
                    </p>
                    <div class="w-full conIva rowSpaceBetween">
                        <div class="precio-container">
                            <p v-if="producto.promocion" class="precio-original font-bold text-gray">
                                ${{ calculateOriginalPrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                            </p>
                            <p class="dialogBig font-bold">
                                ${{ calculatePrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                            </p>
                        </div>
                        <p class="iva font-bold text-gray">IVA Incluído</p>
                    </div>
                </div>
            </div>
        </Dialog>

        <Dialog :visible="mostrarImagenAmpliada" @update:visible="mostrarImagenAmpliada = $event" modal
            :dismissableMask="true" class="imagenAmpliadaDialog">
            <div class="imagenAmpliadaContainer">
                <NuxtImg :src="producto?.imagen" :alt="producto?.titulo" />
            </div>
        </Dialog>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        producto: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            store: useVariablesStore(),
            mostrarImagenAmpliada: false,
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
    emits: ['update:visible']
};
</script>

<style scoped>
.dialogBody,
.dialogBody>div {
    gap: 0.625rem;
}

.dialogBody .dialogBig {
    font-size: 1.5rem;
    line-height: 1;
}

.iva {
    font-size: 0.875rem;
}

.conIva {
    align-items: flex-end;
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

/* Cursor pointer para indicar que la imagen es clicable */
.dialogBody img {
    cursor: pointer;
}

/* Estilos para el diálogo de imagen ampliada */
.imagenAmpliadaDialog :deep(.p-dialog-content) {
    padding: 0;
    overflow: hidden;
}

.imagenAmpliadaContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 90vh;
    max-width: 90vw;
}

.imagenAmpliadaContainer img {
    max-height: 90vh;
    max-width: 100%;
    object-fit: contain;
}

@media (width >=480px) {
    .iva {
        font-size: 1rem;
    }
}

@media (width >=660px) {

    .dialogBody,
    .dialogBody>div {
        gap: 1.25rem;
    }
}

@media (width >=1080px) {
    .dialogBody {
        flex-direction: row;
        gap: 3.75rem;
    }

    .dialogBody img {
        max-width: 240px;
    }

    .dialogBody>div>div {
        justify-content: flex-start;
        gap: 1.25rem;
        margin-top: 2.5rem;
    }

    .dialogBody .dialogBig {
        font-size: 2rem;
    }

    .dialogBody p {
        font-size: 1.25rem;
    }
}
</style>