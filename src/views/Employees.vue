<script setup>
import {routerRelativePush, isChildRoute} from '@router/functions'

// emits
let myComponent = {
    name: 'my_btn',
    text: 'Добавить сотрудника',
    clickHandle: () => routerRelativePush('create')
} 
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Сотрудники' )
emits('callback_topBar__functionalButton', myComponent )

</script>

<template>
    
    <template v-if="!isChildRoute()">
        employees
    </template>
    <router-view />
</template>
