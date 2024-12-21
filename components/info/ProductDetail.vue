<template>
    <Dialog 
        :visible="visible" 
        @update:visible="$emit('update:visible', $event)" 
        modal 
        :dismissableMask="true"
        class="dialogDetail">
        <div class="dialogBody columnAlignCenter">
            <NuxtImg class="w-full max-w-300" :src="`/images/${producto?.image}.png`" :alt="producto?.title" />
            <p class="w-full dialogBig">{{ producto?.title }}</p>
            <p class="w-full">{{ producto?.description }}</p>
            <div class="w-full rowSpaceBetween align-items-end">
                <p class="dialogBig font-bold">
                    ${{ producto?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }}
                </p>
                <p class="dialogBig font-bold text-dark-gray"><sup>+</sup>IVA</p>
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
    emits: ['update:visible']
};
</script>

<style scoped>
.dialogBody .dialogBig {
    font-size: 1.5rem;
}
</style>