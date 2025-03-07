<template>
    <div class="compra">
        <p>Para ventas mayoristas a partir de $200.000</p>
    </div>
</template>

<style scoped>
.compra {
    position: sticky;
    top: 0;
    z-index: 10;
    text-align: center;
    background-color: var(--color-white);
    padding: 0.625rem;
}

.compra p {
    font-size: 0.875rem;
    font-weight: 500;
}

@media (width >=660px) {
    .compra p {
        font-size: 1rem;
    }
}

@media (width >=1080px) {
    .compra p {
        font-size: 1.25rem;
    }
}

@media (width >=1440px) {
    .compra p {
        font-size: 1.5rem;
    }
}
</style>