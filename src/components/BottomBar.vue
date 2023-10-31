<script setup>
import Svg from '@components/Svg.vue'

</script>

<template>
    <nav class="bottombar">
            <div class="bottombar__item bottombar__developed" >
                <span class="col-1">
                    Разработчик:
                </span>
                <span class="col-2">
                    Служба связи
                </span>
            </div>    
            <div class="bottombar__item bottombar__balance">
                <span class="col-1">
                    Баланс:
                </span>
                <span class="col-2">
                    5 рублей
                </span>
            </div>    
            <div class="bottombar__item bottombar__phone">
                <span class="col-1">
                    Телефон:
                </span>
                <span class="col-2">
                    xxxxx
                </span>
            </div>    
            <div class="bottombar__item bottombar__status">
                <span class="col-1">
                    Статус:
                </span>
                <span class="col-2">
                    ОК
                </span>
            </div>    
            <div class="bottombar__item bottombar__lists">
                <span class="col-1">
                    Запущено списков:
                </span>
                <span class="col-2">
                    5
                </span>
            </div>    
    </nav>
</template>

<style lang="sass" scoped>
@import '@assets/main'

.bottombar
    // type
    display: flex
    // size
    height: 2rem
    // position 
    align-items: center
    margin-left: 1rem
    margin-right: 1rem
    gap: 1rem
    // common
    user-select: none
    color: #c1c1c1
    // childs
    .bottombar__item
        display: flex
        justify-content: center
        flex-shrink: 0
        flex-grow: 1
        gap: .5rem
        width: auto

        &.bottombar__balance
            .col-2
                color: red
        &.bottombar__status
            .col-2
                color: #00e800
        &.bottombar__lists
            .col-2
                color: #00e800
        
        

</style>


<style>
a{
    background-color: #c9c9c9;
}
</style>