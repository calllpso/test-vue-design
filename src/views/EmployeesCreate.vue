<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {EmployeeForm} from '@classes/base'

const employeeForm = new EmployeeForm();
const out = ref(null)

function get_callback(){
    out.value = employeeForm.apiJsonTransform()
}

</script>

<template>
    {{ out }}
    <GridCard>
        <InputCard :dataFields="employeeForm"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
    </GridCard>

</template>
