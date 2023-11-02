<script setup>
import {routerRelativePush, isDoubleChildRoute} from '@router/functions'
// emits
let myComponent = {
    name: 'MyBtn',
    text: 'Добавить список',
    clickHandle: () => routerRelativePush('create')
} 

const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Списки' )
emits('callback_topBar__functionalButton', myComponent )
</script>

<template>
    <template v-if="!isDoubleChildRoute()">
        lists
    </template>
    <router-view />
</template>
