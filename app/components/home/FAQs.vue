<template>
    <section class="columnAlignCenter">
        <h2>Preguntas frecuentes</h2>
        <div class="w-full faqWrapper column">
            <div class="faqRight column">
                <Accordion value="0" class="w-full" v-for="(faq, index) in faqsLeft" :key="index">
                    <AccordionPanel value="1">
                        <AccordionHeader>
                            <p>{{ faq.question }}</p>
                            <Icon class="accordionIcon" name="mingcute:add-line" />
                        </AccordionHeader>
                        <AccordionContent>
                            <ClientOnly>
                                <p v-html="faq.answer"></p>
                            </ClientOnly>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div class="faqLeft column">
                <Accordion value="0" class="w-full" v-for="(faq, index) in faqsRight" :key="index">
                    <AccordionPanel value="1">
                        <AccordionHeader>
                            <p>{{ faq.question }}</p>
                            <Icon class="accordionIcon" name="mingcute:add-line" />
                        </AccordionHeader>
                        <AccordionContent>
                            <ClientOnly>
                                <p v-html="faq.answer"></p>
                            </ClientOnly>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            faqsLeft: [
                {
                    question: "¿Cuáles son los métodos de pago?",
                    answer: "Los métodos de pago son efectivo, transferencia, echeck",
                },
                {
                    question: "¿Hacen envíos?",
                    answer: "Si, hacemos envíos a todo el país",
                },
            ],
            faqsRight: [
                {
                    question: "¿Dónde están ubicados?",
                    answer: "Nos encontramos en <a href='https://maps.app.goo.gl/YrV9uew6UAgXhKJ18' target='_blank'>Av Mitre 836, Villa Martelli</a> de Lunes a Viernes de 10 a 16hs: ",
                },
                {
                    question: "¿Puedo hacer pedidos por Whatsapp?",
                    answer: "Si, podes hacernos pedidos al <a href='https://wa.me/1153670523/?text=¡Hola! Estoy en el catálogo de We Glam Importadores y quiero pedir más información.' target='_blank'>1156370523</a>",
                },
            ],
        }
    },
}
</script>

<style>
.faqWrapper .p-accordionpanel,
.faqWrapper .p-accordionheader,
.faqWrapper .p-accordioncontent-content {
    border: none;
}

.faqWrapper,
.faqWrapper>div {
    gap: 0.625rem;
}

.faqWrapper .p-accordionheader-toggle-icon {
    display: none;
}

.faqWrapper .p-accordion {
    border-bottom: 2px solid #999999;
    padding-bottom: 0.625rem;
}

.faqLeft .p-accordion:last-child {
    border-bottom: none;
}

.faqWrapper .p-accordionheader p {
    font-size: 0.875rem;
    font-weight: 500;
}

.faqWrapper .accordionIcon {
    font-size: 0.875rem !important;
    color: #999999;
    transition: all 0.3s;
}

.faqWrapper .p-accordionpanel-active .accordionIcon {
    transform: rotate(45deg);
}

.faqWrapper .p-accordioncontent-content {
    padding-top: 0.625rem;
}

.faqWrapper .p-accordioncontent-content a {
    color: var(--color-black);
}

@media (width >=660px) {
    .faqWrapper .p-accordionheader p {
        font-size: 1rem;
    }

    .faqWrapper .p-accordioncontent-content p {
        font-size: 0.875rem;
    }
}

@media (width >=992px) {
    .faqWrapper {
        flex-direction: row;
        gap: 2.75rem;
    }

    .faqWrapper>div {
        width: 50%;
        height: 100%;
    }

    .faqRight .p-accordion:last-child {
        border-bottom: none;
    }
}

@media (width >=1080px) {
    .faqWrapper .p-accordionheader p {
        font-size: 1.25rem;
    }

    .faqWrapper .p-accordioncontent-content p,
    .faqWrapper .p-accordioncontent-content a {
        font-size: 1rem;
    }
}

@media (width >=1440px) {
    .faqWrapper .p-accordionheader p {
        font-size: 1.5rem;
    }


    .faqWrapper .p-accordioncontent-content p,
    .faqWrapper .p-accordioncontent-content a {
        font-size: 1.25rem;
    }
}
</style>