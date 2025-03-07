<template>
    <Dialog :visible="visible" @update:visible="$emit('update:visible', $event)" modal :dismissableMask="true"
        class="dialogDetail">
        <div class="dialogBody columnAlignCenter">
            <div class="imageMagnifierContainer" ref="imageContainer">
                <img class="w-full originalImage" :src="producto?.imagen" :alt="producto?.titulo"
                    @mousemove="handleMouseMove" @mouseleave="handleMouseLeave" ref="originalImage" />
                <div class="magnifierGlass" v-show="isZooming" :style="magnifierStyle"></div>
            </div>
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
        zoomLevel: {
            type: Number,
            default: 2.5
        }
    },
    data() {
        return {
            store: useVariablesStore(),
            isZooming: false,
            magnifierStyle: {
                backgroundImage: '',
                backgroundPosition: '0% 0%',
                display: 'none'
            }
        }
    },
    mounted() {
        if (this.producto?.imagen) {
            this.preloadImage(this.producto.imagen);
        }
    },
    methods: {
        calculatePrice(dolarCost) {
            return Math.round(dolarCost * this.store.DOLAR_WG * this.store.GANANCIA);
        },
        // Precargar la imagen para usar en el zoom
        preloadImage(src) {
            const img = new Image();
            img.src = src;
        },

        handleMouseMove(e) {
            const imgElement = this.$refs.originalImage;
            if (!imgElement) return;

            this.isZooming = true;

            const rect = imgElement.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
            const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));

            const glassWidth = 150;
            const glassHeight = 200;

            let leftPos = x - glassWidth / 2;
            let topPos = y - glassHeight / 2;

            leftPos = Math.max(0, Math.min(rect.width - glassWidth, leftPos));
            topPos = Math.max(0, Math.min(rect.height - glassHeight, topPos));

            this.magnifierStyle = {
                left: `${leftPos}px`,
                top: `${topPos}px`,
                backgroundImage: `url(${this.producto?.imagen})`,
                backgroundPosition: `${xPercent}% ${yPercent}%`,
                backgroundSize: `${this.zoomLevel * 100}%`,
                display: 'block'
            };
        },

        handleMouseLeave() {
            this.isZooming = false;
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

.imageMagnifierContainer {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.originalImage {
    display: block;
    width: 100%;
    cursor: zoom-in;
}

.magnifierGlass {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-repeat: no-repeat;
    pointer-events: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
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