<script setup>
// emits
const emits = defineEmits(['callback_topBar__title', 'callback_topBar__functionalButton'])
emits('callback_topBar__title', 'Отчеты' )
emits('callback_topBar__functionalButton', null )
</script>

<template>
    reports
</template>
