<script setup>
import {routerRelativePush, isDoubleChildRoute} from '@router/functions'
import Svg from '@components/Svg.vue';
import {ref} from 'vue'
import {EmployeeTable} from '@classes/base'

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
        id:         4,
        surname:   '4' , 
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
    }
]
const employeeTable = ref(new EmployeeTable(indata))


</script>

<template>

    <template v-if="!isDoubleChildRoute()">
        <div class="card">
            <table class="card__table">
                <thead>
                    <tr>
                        <template v-for="(head, key) in employeeTable.thead">
                            <td @click="employeeTable.setSort(key)">
                                <div class="card__td-flex" >
                                    <span> {{ head.value }} </span>
                                    
                                    <Svg class="card__icon" 
                                    :class="{
                                        visible: head.sort !=null, 
                                        rotate: head.sort == 'desc'
                                    }"
                                    :name ="'arrow-up'" ></Svg>
                                </div>
                            </td>

                        </template>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="row in employeeTable.tbody">
                        <tr :id="`${row.service.id}row`">
                            <template v-for="field in row.common">
                                <td> {{field}} </td>
                            </template>
                        </tr>
                    </template>
                   
                </tbody>
            </table>
        </div>

    </template>
    <router-view />
</template>

<style lang="sass" scoped>

.card
    padding: .5rem
    background: white
    user-select: none
    .card__icon
        opacity: 0
        width: 1.25rem
        transition: all .18s
        &.visible
            opacity: 1
        &.rotate
            transform: rotate(180deg)
.card__td-flex
    display: flex
    align-items: center
    gap: .25rem
    width: max-content
    word-wrap: break-word
    &:hover
        .card__icon:not(.visible)
            opacity: 0.5
.card__table
    width: 100%
    border-collapse: collapse
    padding-left: 1rem
    table-layout: fixed
    tr
        height: 3rem
        &:nth-child(2n)
            background: #bebebe
        td
            width: 9rem
            &:first-child 
                padding-left: 1rem
    thead    
        background: #a0c9ff
        cursor: pointer

</style>
