<script setup>
import {ref, watch, computed} from 'vue'
const props = defineProps({
    value: Boolean
})
const checkbox = ref(props.value)

const emits = defineEmits(['callback'])
function toggleCheckbox() {
    emits('callback', checkbox.value)

}

watch(() => props.value, (newVal) => {
        checkbox.value = newVal
})

</script>

<template>
        <input type="checkbox"  v-model="checkbox"  @change="toggleCheckbox()" class="switch">
</template>

<style lang="sass" scoped>
$height--switch: .5rem
$width--switch: 2.5rem
$width--circle: calc(2.25 * $height--switch)
$top--circle: calc( ($height--switch - $width--circle) / 2 )

.container
    width: $width--switch
    height: calc( 2 * $height--switch  )
    display: inline-flex

input[type="checkbox"]
    -webkit-appearance: none
    -moz-appearance: none
    appearance: none
    cursor: pointer
    margin: 0

.switch
    height: $height--switch
    width: $width--switch
    border-radius: 1rem
    position: relative
    background: #7d7d7d
    transition: all .15s
    &:after
        content: ''
        position: absolute
        top: $top--circle
        width: $width--circle
        height: $width--circle
        border-radius: 50%
        
        background: #fff
        transition: all .15s
    &:checked
        background-color: #464545
        &:after
            transform: translatex(calc($width--switch - $width--circle))
            background-color: #101010
    &:hover
        &:after
            background: black
</style>