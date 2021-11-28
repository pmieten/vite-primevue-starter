<template>
  <div class="layout-menu-container">
    <InputText v-model="model.lastName" />
    employee Editor
    {{ textValue2 }} | {{ root }} | {{ mo }} |
    {{ model.getName() }}
  </div>
</template>

<script setup lang='ts'>
import { Employee } from './model';

const textValue2 = ref('Some Text');

const textValue5 = ref('Some Text');

interface Props {
  mo?: Employee;
  root?: string;
}

const props = withDefaults(defineProps<Props>(), {
  root: 'false',
});

let e = new Employee();
e.firstName = 'name test';
e.lastName = 'last name test';
const model: Employee = ref(e);
</script>


<style scoped>
</style>