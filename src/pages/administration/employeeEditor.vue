<template>
  <div class="layout-menu-container">
    <InputText v-model="model.lastName" />employee Editor
    <br />
    {{ model.id }}
    <br />
    model: {{ model }}
    <br />
    |
    {{ model.getName() }}
    <br />
  </div>
</template>


<script setup lang='ts'>
import { Employee } from './model'
import { onMounted } from 'vue'
// import { onBeforeMount, onMounted, onUpdated, onUnmounted, watch} from 'vue'


const bindEditor = inject("bindEditor");
onMounted(() => {
  console.log("run onMounted employeeEditor")
  bindEditor(edit, save)
})
console.log("Setup employeeEditor")
const e = new Employee()
// // e.Id = employeeId
e.firstName = 'name test'
e.lastName = 'last name test'

const model = ref<Employee>(e)

const save = () => {
  console.log("run save employee")
  model.value = new Employee()
}

const edit = (id?: number) => {
  console.log("run edit employee for id:" + id)
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
