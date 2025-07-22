import PrimeVue from 'primevue/config'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import ProgressSpinner from 'primevue/progressspinner'
import Drawer from 'primevue/drawer'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue)
    nuxtApp.vueApp.use(ToastService)

    // Registra los componentes globalmente
    nuxtApp.vueApp.component('Toast', Toast)
    nuxtApp.vueApp.component('Button', Button)
    nuxtApp.vueApp.component('Dialog', Dialog)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Password', Password)
    nuxtApp.vueApp.component('ProgressSpinner', ProgressSpinner)
    nuxtApp.vueApp.component('Drawer', Drawer)
    nuxtApp.vueApp.component('Accordion', Accordion)
    nuxtApp.vueApp.component('AccordionPanel', AccordionPanel)
    nuxtApp.vueApp.component('AccordionHeader', AccordionHeader)
    nuxtApp.vueApp.component('AccordionContent', AccordionContent)
})