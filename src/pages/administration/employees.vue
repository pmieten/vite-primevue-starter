<template>


<DataTable :value="employees">
<Dialog :visible="employeeDialog"  :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">

<EmployeeEditor />

  <InputText v-model='textValue' />
<template #footer>    
    <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="closeEmployeeDialog"/>
    <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
</template>
</Dialog>

<template #header>
        <div class="table-header">
            <h5 class="p-m-0">Pracownicy</h5>            
                <Button label="Dodaj" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openEmployeeDialog" />            
        </div>
    </template>  
    <Column field="firstName" header="Imię"></Column>
    <Column field="lastName" header="Nazwisko"></Column>
    <Column field="email" header="E-mail"></Column>
    <Column field="rola" header="Rola"></Column>
</DataTable>

</template>
<script setup lang='ts'>
import EmployeeEditor from './employeeEditor.vue'


const textValue = ref('Some Text');
const employeeDialog= ref (false)


    function clear() {
      textValue.value = '';
    }

    function openEmployeeDialog() {
    employeeDialog.value=true;
    }

    function closeEmployeeDialog(){
      employeeDialog.value=false;
    }

    const employees=[
    {firstName:"Paweł", lastName:"Brown", email: "p.brown@ppp.com", rola:"Administrator" },  
    {firstName:"Paweł", lastName:"Brown", email: "p.brown@ppp.com", rola:"Administrator" },
    {firstName:"Paweł", lastName:"Brown", email: "p.brown@ppp.com", rola:"Administrator" },
    {firstName:"Paweł", lastName:"Brown", email: "p.brown@ppp.com", rola:"Administrator" }]


</script>

<style scoped></style>
