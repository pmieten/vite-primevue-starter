<template>
  <div id='bar' />
  <router-view />
</template>

<script setup lang='ts'>

import { useDataStore } from '@/store/data';

const dataStore = useDataStore();

onMounted(async () => {
  await dataStore.$load({name:'app-data' }).catch((error: any) => console.log(error));
});

useHead({
  title: 'Vite PrimeVue Starter',
  meta: [
    {
      name: 'description',
      content: 'PrimeVue Starter starter for vue and vite',
    },
  ],
});


</script>

<style lang='scss'>
@import 'App.scss';
</style>
