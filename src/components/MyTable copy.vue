<script setup>
import Svg from '@components/Svg.vue';
import InputText from '@components/InputText.vue';
import MyDropDown from '@components/MyDropDown.vue';
import {ref, computed, onMounted, onUnmounted} from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
})


function onWheel(event) {
    let delta = Math.sign(event.deltaY); // Получить направление скроллинга колесом мыши    
    event.currentTarget.scrollLeft += delta * 30
}

// pagination
const itemsPerPage = ref(10)
const currentPage = ref(1)
const totalPages = computed(() => {
  return Math.ceil(props.data.tbody.length / itemsPerPage.value) //вернуть целочисленный результат от деления
})
const minRow = computed(() => { return (currentPage.value - 1)*itemsPerPage.value })
const maxRow = computed(() => { return (minRow.value + itemsPerPage.value) })


function changePage(val){
    if (typeof val === 'number') {
       currentPage.value += (val > 0 && currentPage.value < totalPages.value) ? val : (val < 0 && currentPage.value > 1) ? val : 0;
    }
    else {
        currentPage.value = (val === 'start') ? 1 : totalPages.value;
    }
}





</script>

<template>
    <!-- <div class="test"> -->
        <header class="card__header">
            <div class="card__search">
                <InputText placeholder = "Быстрый поиск" 
                bg="#dddddd" 
                @callback="(val) => data.search(val)"
                postIcon="magnify"
                >
            </InputText>
            </div>
        </header>
        <main id="test" class="card__main" @wheel="onWheel">
            <table class="card__table" >
                <thead>
                    <tr>
                        <template v-for="(head, key) in data.thead">
                            <td @click="data.setSort(key)" class="card__th">
                                <div class="card__th-flex" >
                                    <span> {{ head.value }} </span>
                                    
                                    <Svg class="card__icon" 
                                    :class="{
                                        visible: head.sort !=null, 
                                        rotate: head.sort == 'desc'
                                    }"
                                    :name ="'arrow-up'" ></Svg>
                                </div>
                            </td>
                        </template>
                    </tr>
                </thead>
                <tbody class="card__table-body">
                    <template v-for="(row, index) in data.tbody">
                        <template v-if="(index < maxRow) && (index >= minRow)">

                            <tr :id="`${row.service.id}row`">
                                <template v-for="field in row.common">
                                    <td> {{field}} </td>
                                </template>
                            </tr>
                        </template>
                    </template>
                
                </tbody>
            </table>
        </main>
        <footer class="card__footer" >
            <div class="card__items-per-page"> 
                items-per-page: 
            </div>
            <MyDropDown
                @callback="(val) => itemsPerPage = val"
            />
            <div class="card__info"> page: {{ currentPage }} of {{totalPages}} </div>
            <div class="card__pagination"> 
                <Svg class="icon" name="page-first"  @click="changePage('start')"></Svg>
                <Svg class="icon" name="chevron-left" @click="changePage(-1)"></Svg>
                <Svg class="icon" name="chevron-right" @click="changePage(+1)"></Svg>
                <Svg class="icon" name="page-last" @click="changePage('end')"></Svg>
            </div>
        </footer>
    <!-- </div> -->
        <!-- <MyDropDown/> -->
        <!-- @callback="(val) => itemsPerPage = val" -->

    <!-- <router-view /> -->
</template>

<style lang="sass" scoped>
.test
    display: block
    position: fixed
//     position: sticky
//     top: 4rem
//     z-index: 10

.icon
    width: 1.25rem
    fill: black
.card__header
    background: #bebebe
    display: block
    position: sticky
    top: 0
    left: 0
    z-index: 10
    
    .card__search
        width: max-content
        
.card__main
    &::-webkit-scrollbar 
        height: .85rem
        width: 12px
    &::-webkit-scrollbar-track 
        background: transparent
        

    &::-webkit-scrollbar-thumb
        background-color: #0a466a
        border-radius: 20px
        border: transparent
        &:hover
            background-color: #073049
            
.card__footer
    background: white
    display: flex
    // justify-content: right
    justify-content: left
    gap: 1rem
    position: sticky
    bottom: 0
    left: 0
    contain: content
    *
        display: flex
        align-items: center
        
    

// .card
//     padding: .5rem 0 .5rem .5rem
//     user-select: none
//     // overflow: auto
.card__icon
    opacity: 0
    width: 1.25rem
    transition: all .18s
    &.visible
        opacity: 1
    &.rotate
        transform: rotate(180deg)
.card__th
    &:hover
        .card__icon:not(.visible)
            opacity: 0.5
.card__th-flex
    display: flex
    align-items: center
    gap: .25rem
    width: max-content
    word-wrap: break-word
.card__table
    width: 100%
    border-collapse: collapse
    padding-left: 1rem
    table-layout: fixed
    container-type: inline-size
    background: white
    tr
        height: 3rem
        &:nth-child(2n)
            background: #bebebe
        td
            width: 9rem
            &:first-child 
                padding-left: 1rem
    thead    
        background: #a0c9ff
        cursor: pointer
        // position: sticky
        // top: 2rem
        inset-block-start: 0
// .card__table-body
    // height: 20rem
    // display: block
    // position: table
    // width: 1000px
    
    // max-height: 150px
    // overflow: auto
</style>
