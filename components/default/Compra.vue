<template>
    <div class="compra">
        <ClientOnly>
            <p>Para ventas mayoristas a partir de $200.000 - <NuxtLink
                    to="https://wa.me/+5491156370523/?text=¡Hola! Estoy en el catálogo de We Glam Importadores y quiero pedir más información."
                    class="minorista rowCenter no-underline text-black">
                    <p>Ventas minoristas</p>
                    <Icon name="mingcute:whatsapp-line" />
                </NuxtLink>
            </p>
        </ClientOnly>
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    font-size: 0.875rem;
    font-weight: 500;
}

.minorista {
    gap: 0.25rem;
    color: var(--color-black);
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

    .minorista span {
        font-size: 1.25rem !important;
    }
}

@media (width >=1440px) {
    .compra p {
        font-size: 1.5rem;
    }

    .minorista span {
        font-size: 1.5rem !important;
    }
}
</style>