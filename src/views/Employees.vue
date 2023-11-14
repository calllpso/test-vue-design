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


let indata = [
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    }, {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    }, {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    }, {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    }, {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         1,
        surname:   '1' , 
        name:      'name' , 
        lastname:  'А' , 
        division:  'B' , 
        position:  'Д' , 
        phone:     'hone' , 
        actions:   'actions' 
    },
    {
        id:         4,
        surname:   '3' , 
        name:      'name' , 
        lastname:  'Б' , 
        division:  'A' , 
        position:  'д' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
    {
        id:         2,
        surname:   '2' , 
        name:      'name' , 
        lastname:  'В' , 
        division:  'C' , 
        position:  'D' , 
        phone:     'phone' , 
        actions:   'actions' 
    },
]
const employeeTable = ref(new EmployeeTable(indata))

</script>

<template>

    <template v-if="!isDoubleChildRoute()">
        <div class="custom">
            <MyTable :data="employeeTable"/>
        </div>
        <!-- <div class="test">
        </div> -->


      

    </template>
    <router-view />
</template>

<style lang="sass" scoped>
.test
    padding: 5rem
.custom
    box-sizing: border-box
    padding: 1rem
    width: 100%
    display: flex
    height: 50%
    // height: 20rem
</style>
