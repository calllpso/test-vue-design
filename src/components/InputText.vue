<script setup>
import Svg from '@components/Svg.vue'

const props = defineProps({
    placeholder: String,
    value: String,
    bg: { type: String, required: false, default: 'white' },
    postIcon: { type: String, required: false, default: null }, 
})

const emits = defineEmits(['callback'])
const onInput = (event) => {
  emits('callback', event.target.value)
}

</script>

<template>
    <div class="input-wrap">
        <input class="input-wrap__input-text" type="text" :placeholder="placeholder" :value="value" @input="onInput">
        <Svg v-if="postIcon" class="input-wrap__icon" :name="postIcon"></Svg>
    </div>
</template>

<style lang="sass" scoped>
$bg: v-bind('bg')

$padding: 0.5rem
.input-wrap
    background-color: $bg
    display: flex
    height: 2rem
    .input-wrap__icon
        fill: black
        width: 1.75rem

    .input-wrap__input-text
        all: unset
        width: 100%
        padding: 0rem $padding
        border: 1px solid transparent
        transition: border-color .2s
        &::-webkit-input-placeholder
            opacity: 0.5
        &:focus
            border: 1px solid #0275b8
</style>

