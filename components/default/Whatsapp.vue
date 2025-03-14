<template>
    <NuxtLink
        to="https://wa.me/+5491156370523/?text=¡Hola! Estoy en el catálogo de We Glam Importadores y quiero pedir más información."
        class="whatsappIcon allCenter fixed no-underline">
        <Icon name="mingcute:whatsapp-line" />
    </NuxtLink>
</template>

<style scoped>
.whatsappIcon {
    width: 3rem;
    height: 3rem;
    top: 90vh;
    right: 1.25rem;
    z-index: 5;
    background-color: #25D366;
    border-radius: 50%;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
    transition: background-color 0.25s;
    padding: 0.5rem;
}

.whatsappIcon span {
    color: var(--color-white);
    font-size: 2rem !important;
}

@media (width >=660px) {
    .whatsappIcon {
        width: 4rem;
        height: 4rem;
        right: 2.5rem;
    }

    .whatsappIcon span {
        font-size: 2.5rem !important;
    }
}

@media (width >=1080px) {
    .whatsappIcon {
        width: 5rem;
        height: 5rem;
        top: 87vh;
        right: 3.75rem;
    }

    .whatsappIcon span {
        font-size: 3rem !important;
    }
}
</style>