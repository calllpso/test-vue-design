
<template>
    <aside id="sidebar" class="sidebar" :expand="pinSideBar" @mouseleave="handleMouseLeave" @mouseenter="handleMouseEnter" >
        <div class="sidebar__header">
                <Svg class="sidebar__logo-icon" name="phone" @click="routerPush('/')"> </Svg> 
                <span class="sidebar__logo-text"> PereZvonar </span>
                <span class="sidebar__logo-pin" @click="togglePinSideBar"> 
                    <svg v-if="pinSideBar" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" > <path d="M2 5.27L3.28 4L20 20.72L18.73 22L12.8 16.07V22H11.2V16H6V14L8 12V11.27L2 5.27ZM16 12L18 14V16H17.82L8 6.18V4H7V2H17V4H16V12Z" />
                    </svg>
                    <svg v-else viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M16 12V4H17V2H7V4H8V12L6 14V16H11.2V22H12.8V16H18V14L16 12Z"/>
                    </svg>
                </span>
        </div>

        <ul class="sidebar__nav sidebar__nav_position_up">
            <SideBarNav :collapsedSideBar="collapsedSideBar" :menus="menuUp"/>
        </ul>

        <ul class="sidebar__nav sidebar__nav_position_down">
            <SideBarNav :collapsedSideBar="collapsedSideBar" :menus="menuDown"/>
        </ul>

        
    </aside>
    
    </template>


<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import SideBarNav from '@components/SideBarNav.vue'
import Svg from '@components/Svg.vue';
import {routerPush} from '@router/functions'



const pinSideBar = ref(false)
const collapsedSideBar = ref(null)


const handleMouseLeave = () => {
    if (!pinSideBar.value){
        collapsedSideBar.value = true
    }
};

// свернуть если не нажат pin и нет hover
const handleMouseEnter = () => {
    collapsedSideBar.value = false
};

function togglePinSideBar(){
    pinSideBar.value = !pinSideBar.value
}


const menuUp = ref([
    {
        id: 'menu__monitoring' , 
        col1: 'book-open-variant',    col2:	'Справочники',  col3: 'chevron-down',
        children: [
            { col1: 'account-tie',      col2:	'Сотрудники',     route: '/employees'   },
            { col1: 'briefcase',        col2:	'Должности',      route: '/position'    },
            { col1: 'sitemap',          col2:	'Подразделения',  route: '/division'    },
            { col1: 'playlist-music',   col2:	'Аудио',          route: '/audio'       },
        ]
    },
    { col1: 'file-chart',   col2:	'Отчеты', route: '/reports'},
    { col1: 'script-text',  col2: 	'Списки', route: '/lists' },    
])

const menuDown = ref([
    {
        id: 'menu__user',
        col1: 'file-chart',    col2:	'User settings',  col3: 'chevron-down',
        children: [
            {col2:	'Profile', },
            {col2:	'API tokens',},
        ]
    },
    { col1: 'logout', col2:	'Выйти',},
    {
        id: 'menu__monitoring3' , 
        col1: 'file-chart',    col2:	'Справочники b',  col3: 'chevron-down',
        children: [
            { col1: 'account-tie', col2:	'Сотрудники'},
            { col1: 'briefcase',  col2:	'Должности'},
            { col1: 'sitemap',  col2:	'Подразделения'},
            { col1: 'playlist-music',  col2:	'Аудио'},
        ]
    },
])


</script>




<style lang="sass" scoped>
@import '@assets/main'
// sidebar
.sidebar
    // type
    container-type: inline-size
    display: flex
    flex-direction: column
    // size
    transition: width .35s
    width: $width--sidebar_expand_false
    height: 100%
    &:hover
        width: $width--sidebar_expand_true
    &[expand=true]
        width: $width--sidebar_expand_true

    // common
    
    user-select: none
    color: $clr__font--sidebar
    background-color: $bg--sidebar
    // border-radius: 0 .75rem .75rem 0
    overflow-x: hidden
    // common__scrolling
    overflow-y: scroll
    scrollbar-width: none
    &::-webkit-scrollbar 
        display: none

    
    // childs
    .sidebar__nav
        // type
        display: flex
        flex-direction: column

        // common
        cursor: pointer
        
        // childs
        &.sidebar__nav_position_down
            // positions
            margin-top: auto

    // sidebar__header
    .sidebar__header
        // type
        display: flex
        flex-shrink: 0
        container-type: inline-size
        // size
        height: $height--sidebar__header
        font-size: $font-size--sidebar__logo-row
        //position
        align-items: center

        // common
        background: $bg--logo-container
        cursor: pointer
        
        // positions
        gap: $gap--sidebar
        padding-left: $pd-right--sidebar__row-content
    
        // childs
        .sidebar__logo-icon
            flex-shrink: 0
            // size
            width: $width--sidebar__icon
            
        .sidebar__logo-pin
            // type
            display: block
            // size
            width: $width__icon_pin
            height: $width__icon_pin
            
            
            // positions
            padding: $pd--sidebar__pin
            margin-left: auto
            margin-right: $pd-right--sidebar__row-content
            border-radius: 50%
            
            // common
            fill: white
            transition: background .3s
            &:active
                opacity: .3
            &:hover
                background: $bg--sidebar__pin_hover


</style>