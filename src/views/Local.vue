<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue';
// emits
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Local' )
emits('callback_topBar__functionalButton', null )



const employeeFields = ref({
    head: {text: 'Сотрудник'},
    single: [
            { id: '', type: 'input', name: 'Фамилия',       value: '', },
            { id: '', type: 'input', name: 'Имя',           value: '', },
            { id: '', type: 'input', name: 'Отчество',      value: '', },
            { id: '', type: 'input', name: 'Должность',     value: '', },
            { id: '', type: 'input', name: 'Подразделение', value: '', },
        ],
    multiple: [
       { id: '', type: 'input', name: 'Телефон', value: '1',
            children: {
              values: {
                sms: { type: 'slider', name: 'Sms', value: false },
                voice: { type: 'slider', name: 'Voice', value: false },
              },
              other: [
                  { type: 'icon', icon: 'drag' },
                  { type: 'icon', icon: 'delete' },
              ]
            }

        }
    ],
})

const listFields = ref({
    head: {text: 'Список'},
    single: [
            { id: '', type: 'input', name: 'NameList', value: '', },
            { id: '', type: 'input', name: 'Status', value: '', },
            { id: '', type: 'input', name: 'Audio name', value: '', },
            { id: '', type: 'audio', name: 'Audio', value: '', },
            { id: '', type: 'input', name: 'Configuration', value: '', },
        ],
})


const audioFields = ref({
    head: {text: 'Список'},
    single: [
            { id: '', type: 'input', name: 'fileName', value: '', },
            { id: '', type: 'audio', name: 'Audio', value: '', },
        ],
})

const out = ref('outt')



</script>

<template>
   {{ out }}
   <GridCard>

       <InputCard class="grid-item" :dataFields="employeeFields"
       :btnApplyName="'Сохранить'"
       @callback="(val) => out = val"
       ></InputCard>
       
       <InputCard class="grid-item" :dataFields="listFields"
       :btnApplyName="'Сохранить'"
       @callback="(val) => out = val"
       ></InputCard> 
       
       <InputCard class="grid-item" :dataFields="audioFields"
       :btnApplyName="'Сохранить'"
       @callback="(val) => out = val"
       ></InputCard>      
    </GridCard>
     
</template>
