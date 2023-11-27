<script setup>
import { ref, watch, onMounted  } from 'vue';
import { createPopper } from '@popperjs/core'
import Svg from '@components/Svg.vue';

// HTML Elements
const button = ref(null)
const tooltip = ref(null)
const popperInstance = ref(null)
const list = ref(null)
const listwrap = ref(null)
const listHeight = ref(null)
const liwrap = ref(null)
const popperContainer = ref(null)
const overlayElement = ref(null)


// Parameters
const isVisible = ref(false)
let listItems = [10, 25, 50 , 100, 'all']
const currentValue = ref(listItems[0])





async function selectItem(item){
    toggleVisible()
    currentValue.value = item
    overlayElement.value.remove()
}




// ***          Popper           *** \\
function show() {  
    createOverlay()
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

    
    // await new Promise(resolve => setTimeout(resolve, 1000))  // await max-size transition
    // setTimeout(() => {
    // })
}

// async function hide() {
function hide() {
        liwrap.value.style.height = '0px'
        list.value.style.opacity = '0'

    setTimeout(() => {
        tooltip.value.removeAttribute('data-show');
        // Disable the event listeners
        popperInstance.value.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers,
            { name: 'eventListeners', enabled: false },
          ],
        }));
      }, 200)

}
function toggleVisible(){
  isVisible.value = !isVisible.value
  isVisible.value ? show() : hide()
}
//\\ ***          Popper           *** //\\



// create overlay
async function createOverlay() {    
    // overlay
    overlayElement.value = document.createElement('div');
    overlayElement.value.classList.add('overlay');
    document.body.appendChild(overlayElement.value);
    
    // tooltip
    overlayElement.value.appendChild(tooltip.value)
    popperInstance.value.update()

    // destroy overlay
    overlayElement.value.addEventListener('click', async function(e){ 
        if(e.target == e.currentTarget){
            toggleVisible()
            await new Promise(resolve => setTimeout(resolve, 200))  // await max-size transition
            popperContainer.value.appendChild(tooltip.value)
            overlayElement.value.remove()
        }
    });
}


onMounted(()=>{
    popperInstance.value = createPopper(button.value, tooltip.value, {
        placement: 'bottom',
    }); 
    // get listHeight
    tooltip.value.setAttribute('data-show', '');
    listHeight.value = list.value.getBoundingClientRect().height + 'px' 
    tooltip.value.removeAttribute('data-show');
    

    
    // set listHeight 0px and fix listwrap  for correct popper placement
    liwrap.value.style.height = '0px'
    listwrap.value.style.height = listHeight.value
})

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



    <div ref="button" class="popper-btn" @click="toggleVisible">
      
      <span> {{currentValue}}   </span>
      <Svg  class="drop-menu__icon" name="chevron-down" :opened="isVisible"></Svg> 
    </div>
    
    <div id="tooltip" ref="tooltip" class="tooltip"> 
      <div ref="listwrap" class="listwrap">
        <ul ref="list" id="list" class="list">
          <div ref="liwrap" class = "liwrap">
            <template v-for="item in listItems">
              <li @click="selectItem(item)"> {{ item }} </li>
            </template>
          </div>
        </ul>
      </div>
    </div>

  </div>
</template>




<style lang="sass">
.overlay
    position: fixed
    z-index: 50
    top: 0
    left: 0
    width: 100%
    height: 100%


.liwrap
  height: max-content
  width: 5rem
  transition: height .2s ease
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
    transition: opacity .4s
.tooltip 
    width: 5rem
    display: none
    cursor: pointer
    z-index: 1000
    &[data-show] 
        display: block
    &[data-popper-placement^='top']

      // for down->up height transition when placement top
      .list
        display: flex
        align-items: end

.popper-btn
  cursor: pointer
  width: 5rem
  padding: 0

  border: 1px solid
  border-color: #b0b0b0
  background: #ccdde9
  box-sizing: border-box
  padding-left: .5rem
  display: flex
  align-items: center
  &:hover
    background: #a5c5dc 
    
.drop-menu__icon
    margin-left: auto
    width: 1.75rem
    transition: transform .2s
    transform: rotate(0deg)
    &[opened=true]
        transform: rotate(-180deg)


</style>