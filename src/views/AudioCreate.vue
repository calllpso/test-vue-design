<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {AudioForm} from '@classes/base'

const audioForm = new AudioForm()
const out = ref(null)

function get_callback(){
    out.value = audioForm.apiJsonTransform()
}

</script>


<template>
    {{ out}}
    <GridCard>
        <InputCard :dataFields="audioForm"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
    </GridCard>

</template>
