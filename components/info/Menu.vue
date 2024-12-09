<template>
  <PanelMenu :model="menu">
    <template #item="{ item }">
      <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
    </template>
  </PanelMenu>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>
