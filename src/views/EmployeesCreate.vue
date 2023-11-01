<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {Employee} from '@classes/base'

const employee = new Employee();
const out = ref(null)

function get_callback(){
    out.value = employee.apiJsonTransform()
}

</script>

<template>
    create
    {{ out }}
    <GridCard>
        <InputCard :dataFields="employee"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
    </GridCard>

</template>
