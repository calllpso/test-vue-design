<script setup>
import { ref, watch, onMounted  } from 'vue';
import { createPopper } from '@popperjs/core'
import Svg from '@components/Svg.vue';

const button = ref(null)
const tooltip = ref(null)
const popperInstance = ref(null)
const popperContainer = ref(null)
const overlayElement = ref(null)

const dropMenuWrap = ref(null)
const visible = ref(false)

let listItems = [10, 25, 50 , 100, 'all']

const currentValue = ref(listItems[0])

// popper show
function show() {
        tooltip.value.setAttribute('data-show', '')

        popperInstance.value.setOptions((options) => ({
            ...options,
            modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: true },
            ],
        }))
        popperInstance.value.update()
        createOverlay()
        tooltip.value.style.height = dropMenuWrap.value.getBoundingClientRect().height + 'px' 
    }
// popper hide
function hide() {
    visible.value = false
    tooltip.value.style.height = '0px'
    popperInstance.value.setOptions((options) => ({
        ...options,
        modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: false },
        ],
    }))
}


// create overlay
function createOverlay() {
    overlayElement.value = document.createElement('div');
    overlayElement.value.classList.add('overlay');
    overlayElement.value.appendChild(tooltip.value)
    document.getElementById('content').appendChild(overlayElement.value);
    
    // destroy overlay
    overlayElement.value.addEventListener('click', async function(e){ 
        if(e.target == e.currentTarget){
            hide()
            await new Promise(resolve => setTimeout(resolve, 200))  // await max-size transition
            popperContainer.value.appendChild(tooltip.value)
            overlayElement.value.remove()
        }
    });
}


const toggleDropdown = () => {
    visible.value = !visible.value
    visible.value ? show() : hide()
}


onMounted(()=>{
    popperInstance.value = createPopper(button.value, tooltip.value, {
        placement: 'bottom',
    })
})

async function selectItem(item){
    
    
    hide()
    await new Promise(resolve => setTimeout(resolve, 200))  // await max-size transition
    popperContainer.value.appendChild(tooltip.value)
    overlayElement.value.remove()
    currentValue.value = item
}


const emits = defineEmits(['callback'])
watch(
    () => currentValue.value,
    (newValue) => {
        emits('callback', newValue)
    }
)
</script>

<template>


<div ref="popperContainer" class="popperContainer">
    <div ref="button" class="popper-btn"  :visible="visible" @click="toggleDropdown">
        <span> {{currentValue}} </span>
        <Svg  class="drop-menu__icon" name="chevron-down" :opened="visible"></Svg> 
    </div>
    <div ref="tooltip" class="tooltip">
        <ul class="drop-menu__list">
            <div ref="dropMenuWrap">
                <template v-for="item in listItems">
                    <li @click="selectItem(item)"> {{ item }} </li>
                </template>
            </div>
        </ul>
    </div>
</div>
</template>


<style lang="sass">
.overlay
    position: fixed
    z-index: 999
    top: 0
    left: 0
    width: 100%
    height: 100%

.popper-btn
    background: white
    // height: 100%
    cursor: pointer
    display: flex
    align-items: center
    width: 3.5rem
    padding-left: .5rem

    .drop-menu__icon
        margin-left: auto
        width: 1.75rem
        transition: transform .2s
        transform: rotate(0deg)
        &[opened=true]
            transform: rotate(-180deg)

.popperContainer
    height: 100%
    user-select: none

.tooltip 
    background: #fff
    display: none
    z-index: 100
    
    transition: height .2s
    height: 0px
    overflow: hidden

    &[data-show] 
        display: block
    
    .drop-menu__list 
        // position: fixed
        width: 4rem
        cursor: pointer
        user-select: none
        li
            padding-left: .5rem
            &:hover
                background: #bebebe


</style>
