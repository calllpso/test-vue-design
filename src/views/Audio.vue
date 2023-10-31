<script setup>
// emits
let myComponent = {
    name: 'my_btn',
    text: 'Добавить аудио',
} 
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Аудио' )
emits('callback_topBar__functionalButton', myComponent )

</script>


<template>
    audio 
</template>
