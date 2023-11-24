<script setup>
import { ref, watch, onMounted  } from 'vue';
import { createPopper } from '@popperjs/core'


const button = ref(null)
const tooltip = ref(null)
const popperInstance = ref(null)
const list = ref(null)
const listwrap = ref(null)
const listHeight = ref(null)
const liwrap = ref(null)

const isVisible = ref(false)

let listItems = [10, 25, 50 , 100, 'all']

function show() {
  
    // Make the tooltip visible
    tooltip.value.setAttribute('data-show', '');
  
    // Enable the event listeners
    popperInstance.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        { name: 'eventListeners', enabled: true },
      ],
    }));
    popperInstance.value.update()
    
    list.value.style.opacity = '1'
    
    liwrap.value.style.height = listHeight.value
    // for down-up transition when placement top
    list.value.style.height = listHeight.value
}



function hide() {
        liwrap.value.style.height = '0px'


        list.value.style.opacity = '0'
        // Hide the tooltip
        tooltip.value.removeAttribute('data-show');
        // Disable the event listeners
        popperInstance.value.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
          ],
        }));

}

function toggleVisible(){
  isVisible.value = !isVisible.value
  isVisible.value ? show() : hide()
}

onMounted(()=>{
    popperInstance.value = createPopper(button.value, tooltip.value, {
        placement: 'bottom',
    }); 
    // get listHeight
    tooltip.value.setAttribute('data-show', '');
    listHeight.value = list.value.getBoundingClientRect().height + 'px' 
    tooltip.value.removeAttribute('data-show');
    console.log(listHeight.value) 
    
    // set listHeight 0px and fix listwrap  for correct popper placement
    liwrap.value.style.height = '0px'
    listwrap.value.style.height = listHeight.value
})



</script>

<template>
    <button class="popper-btn" ref="button" aria-describedby="tooltip" @click="toggleVisible" >My button</button>

    <div ref="tooltip" class="tooltip"> 
      <div ref="listwrap" class="listwrap">
        <ul ref="list" id="list" class="list">
          <div ref="liwrap" class = "liwrap">
            <template v-for="item in listItems">
              <li> {{ item }} </li>
            </template>
          </div>
        </ul>
      </div>
    </div>
 
</template>



<style lang="sass" scoped>
.liwrap
  height: max-content
  width: 5rem
  transition: height .15s
  overflow-y: hidden 
  background: #cbe0ff
  box-sizing: border-box
  padding: 0.25rem 0
  li
    padding-left: .5rem
    height: 1.5rem
    &:hover
      background: #aecef2


.list

    opacity: 0
    transition: opacity .15s
.tooltip 
    width: 5rem
    display: none
    cursor: pointer

    &[data-show] 
        display: block

    &[data-popper-placement^='top']

      // for down->up height transition when placement top
      .list
        display: flex
        align-items: end

.popper-btn
  width: 5rem
  padding: 0
    

</style>