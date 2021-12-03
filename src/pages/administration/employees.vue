<template>  
<AfEditorDialog ref="afEditorDialog" header="Employee details">
    <EmployeeEditor></EmployeeEditor>    
</AfEditorDialog> 

  <DataTable :value="employees">
    <template #header>
      <div class="table-header">
        <h5 class="p-m-0">Pracownicy</h5>
        <Button
          label="Dodaj"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="createEmployee"
        />
      </div>
    </template>
    <Column field="firstName" header="Imię"></Column>
    <Column field="lastName" header="Nazwisko"></Column>
    <Column field="email" header="E-mail"></Column>
    <Column field="rola" header="Rola"></Column>
    <Column>
      <template #body="ep">
        <Button icon="pi pi-pencil" @click="editEmployee(ep.data.id)" />
      </template>
    </Column>
  </DataTable>
</template>
<script setup lang='ts'>
import EmployeeEditor from './employeeEditor.vue'
import AfEditorDialog from '@/components/af/afEditorDialog.vue'

const isOpenEmployeeDialog = ref(false)
const employees = [
  { id: 1, firstName: 'Paweł', lastName: 'Brown', email: 'p.brown@ppp.com', rola: 'Administrator' },
  { id: 2, firstName: 'Paweł', lastName: 'Brown', email: 'p.brown@ppp.com', rola: 'Administrator' },
  { id: 3, firstName: 'Paweł', lastName: 'Brown', email: 'p.brown@ppp.com', rola: 'Administrator' },
  { id: 4, firstName: 'Paweł', lastName: 'Brown', email: 'p.brown@ppp.com', rola: 'Administrator' },
]



function editEmployee(id: number) {
  afEditorDialog.value.edit(id)
}


const afEditorDialog = ref<AfEditorDialog>(null)
const createEmployee = () => {
  afEditorDialog.value.create()
}

</script>

<style scoped></style>
