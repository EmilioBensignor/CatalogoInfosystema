<template>
    <Dialog :visible="visible" @update:visible="$emit('update:visible', $event)" modal :dismissableMask="true"
        class="dialogDetail">
        <div class="dialogBody columnAlignCenter">
            <!-- <NuxtImg class="w-full" :src="producto?.imagen" :alt="producto?.titulo" /> -->
            <div class="w-full columnAlignCenter">
                <p class="w-full dialogBig font-bold">{{ producto?.titulo }}</p>
                <p class="w-full">{{ producto?.descripcion }}</p>
                <div class="w-full rowSpaceBetween align-items-end">
                    <p class="dialogBig font-bold">
                        ${{ calculatePrice(producto.costo_dolar).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                    </p>
                    <p class="dialogBig font-bold text-gray"><sup>+</sup>IVA</p>
                </div>
            </div>
        </div>
    </Dialog>
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
        }
    },
    methods: {
        calculatePrice(dolarCost) {
            return Math.round(dolarCost * this.store.DOLAR_WG * this.store.GANANCIA)
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