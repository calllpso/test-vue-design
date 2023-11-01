<script setup>
import {routerRelativePush} from '@router/functions'
// emits
let myComponent = {
    name: 'my_btn',
    text: 'Добавить аудио',
    clickHandle: () => routerRelativePush('create')
}
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Аудио' )
emits('callback_topBar__functionalButton', myComponent )

</script>


<template>
    audio 
    <router-view />
</template>
