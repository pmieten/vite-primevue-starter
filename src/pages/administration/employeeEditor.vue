<template>
  <div class="layout-menu-container">
    <InputText v-model="model.lastName" />
    employee Editor
    {{ textValue2 }} | {{ root }} | <br />model.id: {{ model.id }} <br />employeeId: {{ employeeId }} |
    {{ model.getName() }}
  </div>
</template>

<script setup lang='ts'>
import { onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue'
import { Employee } from './model'

const textValue2 = ref('Some Text')
const model: Employee = ref(null)

interface Props {
  employeeId?: number
}

const props = withDefaults(defineProps<Props>(), {
  employeeId: new Employee(),
})

const save = () => {
  alert('ddd')
}

defineExpose({
  save,
})

onBeforeMount(() => {
  const e = new Employee()
  // // e.Id = employeeId
  e.firstName = 'name test'
  e.lastName = 'last name test'
  model.value = e
})

onMounted(() => {})

</script>

<style scoped>
</style>
