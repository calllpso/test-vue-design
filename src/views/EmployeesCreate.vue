<script setup>
import InputCard from '@components/InputCard.vue'
import GridCard from '@components/GridCard.vue'
import {ref} from 'vue'

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
const out = ref(null)
</script>

<template>
    create
    {{ out }}
    <GridCard>
        <InputCard :dataFields="employeeFields"
        :btnApplyName="'Сохранить'"
        @callback="(val) => out = val"
        ></InputCard>
    </GridCard>

</template>
