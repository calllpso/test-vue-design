<script setup>
const props = defineProps({
    placeholder: String,
    value: String
})

const emits = defineEmits(['callback'])
const onInput = (event) => {
  emits('callback', event.target.value)
}

</script>

<template>
    <input class="input-text" type="text" :placeholder="placeholder" :value="value" @input="onInput">
</template>

<style lang="sass" scoped>
$padding: 0.5rem
.input-text
    display: flex
    all: unset
    min-width: max-content
    height: 2rem
    // height: 1.5rem
    width: calc(100% - 2 * $padding)
    padding: 0rem $padding
    border-radius: 4px
    background: white
    border: 1px solid transparent
    transition: border-color .2s
    &:focus
        border: 1px solid #0275b8
        
    
//   box-shadow: unset
</style>

