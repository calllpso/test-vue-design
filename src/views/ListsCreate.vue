<script setup>
import InputCard from '@components/InputCard.vue'
import MyTextArea from '@components/MyTextArea.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'
import {ListForm} from '@classes/base'

const listForm = new ListForm()
const out = ref(null)

function get_callback(){
    out.value = listForm.apiJsonTransform()
}
</script>

<template>
    {{ out }}
    <GridCard>
        <InputCard :dataFields="listForm"
        :btnApplyName="'Сохранить'"
        @callback="get_callback()"
        ></InputCard>
        <MyTextArea 
        @callback="(val) => listForm.message = val"
        />
        
    </GridCard>

</template>
