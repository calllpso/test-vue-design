<script setup>
import InputCard from '@components/InputCard.vue'
import MyTextArea from '@components/MyTextArea.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {List} from '@classes/base'

const list = new List();
const out = ref(null)

function get_callback(){
    out.value = list.apiJsonTransform()
}

</script>

<template>
    create
    {{ out }}
    <GridCard>
        <InputCard :dataFields="list"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
        <MyTextArea 
        @callback="(val) => list.message = val"
        />
        
    </GridCard>

</template>
