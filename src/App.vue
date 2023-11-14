<script setup>
import GridArea from '@components/GridArea.vue'
import SideBar from '@components/SideBar.vue'
import TopBar from '@components/TopBar.vue'
import BottomBar from '@components/BottomBar.vue'
import { shallowRef, defineAsyncComponent } from 'vue';
import { isDoubleChildRoute} from '@router/functions'

const topBar__title = shallowRef(null)
const topBar__functionalButton = shallowRef(null)

function defineMyComponent(btnComp){
  if (btnComp==null){
    topBar__functionalButton.value = null
  }
  else{
    topBar__functionalButton.value = defineAsyncComponent( () => import(`@components/${btnComp.name}.vue`))
    topBar__functionalButton.value.click = btnComp.hasOwnProperty('clickHandle') ? btnComp.clickHandle : null
    topBar__functionalButton.value.text = btnComp.text
  }
}

</script>

<template>
    <GridArea
      gridArea='
      "b a a"
      "b c c"
      "b d d"'
      height = "2rem auto 2rem"
      width = "min-content 1fr 2rem"
      bg_a="#0a466a"
      bg_b="#c1c1c1"
      bg_d="#0e354d"
      bg_c="#bebebe"
      >
      <template #b>
        <SideBar/>
      </template>

      <template #a>
        <TopBar>
          <template #title>
              {{ topBar__title }}
          </template>
          <!-- во вложенных роутах не показывать функциональную кнопку -->
          <template #right-menu v-if="!isDoubleChildRoute()">
              <component :is="topBar__functionalButton" 
                v-if="topBar__functionalButton !=null" @click="topBar__functionalButton.click"
              > 
                {{topBar__functionalButton.text}} 
              </component>
          </template>
        </TopBar>
      </template>

      <template #d>
        <BottomBar></BottomBar>
      </template>

      <template #c>
        <RouterView 
        @callback_topBar__title="(callback__title) => topBar__title = callback__title"
        @callback_topBar__functionalButton="(callback__functionalButton) => defineMyComponent(callback__functionalButton)"
        />
      </template>
      

      </GridArea>

</template>


<style lang="sass">
@import '@assets/main'


</style>

