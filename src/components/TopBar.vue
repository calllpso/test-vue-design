<script setup>
import Svg from '@components/Svg.vue'
import my_btn from '@components/my_btn.vue'

</script>

<template>
    <nav class="topbar">
        <div class="topbar__left-menu">
                <slot name="title"></slot>
        </div>
        <div class="topbar__right-menu">
            <slot name="right-menu"></slot>
        </div>
    </nav>
</template>

<style lang="sass" scoped>
@import '@assets/main'

.topbar
    // type
    display: flex
    flex-shrink: 0
    // size
    height: 2rem
    // position 
    align-items: center
    margin-left: 1rem
    margin-right: 1rem
    
    // common
    color: white
    user-select: none
    // childs
    .topbar__left-menu
        // type
        flex-shrink: 0
        // size 
        font-size: 1.5rem
        // position
        margin-right: auto
    .topbar__right-menu
        // type
        flex-shrink: 0
    
        

</style>


<style>
a{
    background-color: #c9c9c9;
}
</style>