<template>
  <AfEditorDialog ref="afEditorDialog" header="Employee details">
    <EmployeeEditor></EmployeeEditor>
  </AfEditorDialog>
<Button label="open dialog"  @click="openGenericDialog"></Button>
  <Dialog
    :visible="isOpenEmployeeDialog"
    :style="{ width: '450px' }"
    header="Employee Details from dialog"
    :modal="true"
    class="p-fluid"
  >
    <EmployeeEditor ref="employeeEditor1" @vnode-mounted="employeeEditorMounted" />
    <template #footer>
      <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="closeEmployeeDialog" />
      <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveEmployee" />
    </template>
  </Dialog>

  <DataTable :value="employees">
    <template #header>
      <div class="table-header">
        <h5 class="p-m-0">Pracownicy</h5>
        <Button
          label="Dodaj"
          icon="pi pi-plus"
          class="p-button-success p-mr-2"
          @click="openisOpenEmployeeDialog"
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

function openisOpenEmployeeDialog() {
  isOpenEmployeeDialog.value = true
  employeeId = null
}

function closeEmployeeDialog() {
  isOpenEmployeeDialog.value = false
}

let employeeId: number | null

function editEmployee(id: number) {
  isOpenEmployeeDialog.value = true
  employeeId = id
}
const employeeEditorMounted = () => {
  if (employeeId != null) {
    employeeEditor1.value.edit(employeeId)
  }
}

const saveEmployee = () => {
  employeeEditor1.value.save()
}

const afEditorDialog = ref<AfEditorDialog>(null)
const openGenericDialog = () => {
  afEditorDialog.value.create()
}

const employeeEditor1 = ref<EmployeeEditor>(null)
</script>

<style scoped></style>
