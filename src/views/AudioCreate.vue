<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {Audio} from '@classes/base'

const audio = new Audio();
const out = ref(null)

function get_callback(){
    out.value = audio.apiJsonTransform()
}

</script>


<template>
    {{ out}}
    <GridCard>
        <InputCard :dataFields="audio"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
    </GridCard>

</template>
