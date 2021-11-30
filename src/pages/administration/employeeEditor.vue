<template>
  <div class="layout-menu-container">
    <InputText v-model="model.lastName" />employee Editor
    <br />
    model: {{ model }}
    <br />
    |
    {{ model.getName() }}
    <br />
    <br />--------------
  </div>
</template>

<script setup lang='ts'>
import { Employee } from './model'
// import { onBeforeMount, onMounted, onUpdated, onUnmounted, watch} from 'vue'

const textValue2 = ref('Some Text')
watch(textValue2, (newValue, oldValue) => {

})

const e = new Employee()
// // e.Id = employeeId
e.firstName = 'name test'
e.lastName = 'last name test'

const model = ref<Employee>(e)

// interface Props {
//   employeeId?: number
// }
// const props = withDefaults(defineProps<Props>(), {
//   employeeId: null,
// })

// const employeeId = ref(props.employeeId)
// watch(employeeId, (newValue?: number, oldValue) => {
//   model.value.id = newValue
//   alert(newValue)
// })

// watch(() => props.employeeId, (newValue?: number, oldValue) => {
//   model.value.id = newValue
//   alert(newValue)
// })

const save = () => {
  model.value = new Employee()
}

const edit = (id?: number) => {
  const e = new Employee()
  e.id = id
  model.value = e
}

defineExpose({
  save,
  edit
})

</script>

<style scoped>
</style>
