<template>
    <section class="columnAlignCenter">
        <h2>Preguntas frecuentes</h2>
        <div class="w-full faqWrapper column">
            <div>
                <Accordion value="0" class="w-full" v-for="(faq, index) in faqsLeft"
                    :key="index">
                    <AccordionPanel value="1">
                        <AccordionHeader>
                            <p>{{ faq.question }}</p>
                        </AccordionHeader>
                        <AccordionContent>
                            <ClientOnly>
                                <p v-html="faq.answer"></p>
                            </ClientOnly>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div>
                <Accordion value="0" class="w-full" v-for="(faq, index) in faqsRight"
                    :key="index">
                    <AccordionPanel value="1">
                        <AccordionHeader>
                            <p>{{ faq.question }}</p>
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