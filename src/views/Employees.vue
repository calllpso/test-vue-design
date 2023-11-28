<script setup>
import {routerRelativePush, isDoubleChildRoute} from '@router/functions'
import Svg from '@components/Svg.vue';
import InputText from '@components/InputText.vue';
import MyDropDown from '@components/MyDropDown.vue';
import {ref} from 'vue'
import {EmployeeTable} from '@classes/base'
import MyTable from '@components/MyTable.vue';

// emits
let myComponent = {
    name: 'MyBtn',
    text: 'Добавить сотрудника',
    clickHandle: () => routerRelativePush('create')
} 
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Сотрудники' )
emits('callback_topBar__functionalButton', myComponent )


let indata = []
// set InData
for(let id=1; id < 150; id++){
    let list = 
    [
        {
            "id": id++,
            "surname": "Smith",
            "name": "John",
            "lastname": "Doe",
            "division": "Engineering",
            "position": "Software Developer",
            "phone": "123-456-7890",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Johnson",
            "name": "Alice",
            "lastname": "Smith",
            "division": "Marketing",
            "position": "Marketing Specialist",
            "phone": "987-654-3210",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Brown",
            "name": "Michael",
            "lastname": "Jones",
            "division": "Sales",
            "position": "Sales Manager",
            "phone": "555-123-4567",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Davis",
            "name": "Emily",
            "lastname": "Miller",
            "division": "Human Resources",
            "position": "HR Specialist",
            "phone": "111-222-3333",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Wilson",
            "name": "Christopher",
            "lastname": "Taylor",
            "division": "Finance",
            "position": "Financial Analyst",
            "phone": "777-888-9999",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Moore",
            "name": "Olivia",
            "lastname": "Hill",
            "division": "Customer Support",
            "position": "Customer Support Representative",
            "phone": "444-555-6666",
            "actions": "Edit/Delete"
        },
        {
            "id": id++,
            "surname": "Anderson",
            "name": "William",
            "lastname": "Martin",
            "division": "Research and Development",
            "position": "Research Scientist",
            "phone": "999-000-1111",
            "actions": "Edit/Delete"
        },
    ]
    indata = indata.concat(list)
}
// console.log(indata)





const employeeTable = ref(new EmployeeTable(indata))

</script>

<template>

    <template v-if="!isDoubleChildRoute()">
        <div class="custom">
            <MyTable :data="employeeTable"/>
        </div>

      

    </template>
    <router-view />
</template>

<style lang="sass" scoped>
.test
    height: 50%
    box-sizing: border-box
.test1
    max-height: 10%
    padding-top: 2rem
    box-sizing: border-box
.custom
    box-sizing: border-box
    padding: 1rem
    width: 100%
    display: flex
    height: 50%
</style>
