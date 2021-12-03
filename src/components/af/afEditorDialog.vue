<template>
    <Dialog
        :visible="isOpenDialog"
        :style="{ width: '450px' }"
        :header="header"
        :modal="true"
        lass="p-fluid"
    >
        <slot></slot>
        <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="close" />
            <Button label="Save" icon="pi pi-check" class="p-button-text" @click="save" />
        </template>
    </Dialog>
    {{ testFlag }}
</template>



<script setup lang='ts'>
import { useSlots } from 'vue'

let isBind = false;
function bindEditor(edit, save) {
    console.log("run bind")

    if (isBind == false) {
        editFromEditor = edit
        saveFromEditor = save
        isBind = true
    }

    if (objectId != null) {
        edit(objectId)
    }

}

provide('bindEditor', bindEditor) 

const slots = useSlots()

interface Props {
    header?: string
}
const props = withDefaults(defineProps<Props>(), {
    header: null,
})

const isOpenDialog = ref(false)




const create = () => {
    objectId = null
    isOpenDialog.value = true
}

let editFromEditor = () => {
    console.log("Method 'edit' is not bind with editor")
}

let objectId = null
const edit = (id?: number) => {
    console.log("run edit for id:" + id)
    objectId = id
    isOpenDialog.value = true
}

const testFlag = ref(false)
let saveFromEditor = () => {
    console.log("Method 'save' is not bind with editor")
}
const save = () => {
    saveFromEditor();
    isOpenDialog.value = false
    objectId = null
}

const close = () => {
    isOpenDialog.value = false
    objectId = null

}

defineExpose({
    create,
    edit
})

function getChildren() {
    return slots.default ? slots.default() : null
}

function getEditor() {
    for (let child of getChildren()) {
        console.log(child.type.toString())
        if (child.type.toString().endsWith("Editor")) {
            return child;
        }
    }
}

</script>

<style scoped>
</style>

