<script setup>
import Svg from '@components/Svg.vue'

const props = defineProps({
    value: String
})

const emits = defineEmits(['callback'])
const onInput = (event) => {
  emits('callback', event.target.value)
}

</script>

<template>

<div class="text-area">
    <Svg class="text-area__icon" name="email"></Svg>
    <!-- <input class="form__input" type="text" :value="'test'" > -->
    <!-- @input="onInput" -->
    <textarea class="text-area__input" placeholder="Текст сообщения" 
    :value="value" @input="onInput"
    ></textarea>
</div>

</template>

<style lang="sass" scoped>
@import '@assets/main'


.text-area
    display: flex
    height: max-content
    flex-shrink: 1
    background: #ebebeb
    padding: .5rem
    gap: .5rem

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    
    transition: flex-wrap 0.5s ease
.text-area__input
    all: unset
    resize: vertical
    min-height: 3rem
    height: 7rem
    max-height: 20rem
    width: 100%
    border: 1px solid #bebebe
    transition: background .05s
    background: #f3f3f3
    padding: .5rem
    &:focus
        background: white
.text-area__icon
    align-self: start
    width: 1.75rem
    padding-top: .35rem
    fill: black
</style>
