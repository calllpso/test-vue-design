<script setup>
import Svg from '@components/Svg.vue';
import MyDropDown from '@components/MyDropDown.vue';
import {ref, computed} from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
})



// pagination
const itemsPerPage = ref(10)
const currentPage = ref(1)
const totalPages = computed(() => {
    return Math.ceil(props.data.tbody.length / itemsPerPage.value) //вернуть целочисленный результат от деления
})
const minRow = computed(() => { return (currentPage.value - 1)*itemsPerPage.value })
const maxRow = computed(() => { return (minRow.value + itemsPerPage.value) })

const visibleRows = computed(() => { 
    // console.log('comp')
    // console.log(props.data.tbody.slice(minRow.value, maxRow.value))
    return props.data.tbody.slice(minRow.value, maxRow.value ) 
})

const tableRef = ref(null)


function setItemPerPage(items){
    itemsPerPage.value = typeof(items) == 'number' ? items : props.data.tbody.length
}


function changePage(val){
    // console.log(tableRef.value)
    tableRef.value.scrollTop = 0

    if (typeof val === 'number') {
       currentPage.value += (val > 0 && currentPage.value < totalPages.value) ? val : (val < 0 && currentPage.value > 1) ? val : 0;
    }
    else {
        currentPage.value = (val === 'start') ? 1 : totalPages.value;
    }
}
</script>

<template>
    <!-- {{ data.tbody }} -->
    <!-- {{ visibleRows.length }}
    {{ data.tbody.length }}
    {{ minRow }}
    {{ maxRow }} -->
    <!-- {{ visibleRows }} -->
    <div class="custom-table">
        <main class="main" ref="tableRef">
            <table>
                <thead>
                    <tr>
                        <template v-for="(head, index) in data.thead">
                            <th> {{ head.value }} </th>
                        </template>
                        <!-- <template v-for="(head, index) in data.thead">
                            <th> {{ head.value }} </th>
                        </template> -->
                    </tr>
                </thead>
                <tbody>
                    <!-- <template v-for="(row, index) in data.tbody"> -->
                    <template v-for="(row, index) in visibleRows">
                        <!-- <template v-if="(index < maxRow) && (index >= minRow)"> -->

                            <tr>
                                <template v-for="(field, fIndex) in row.common">
                                    <td> {{field}} </td>
                                </template>
                            </tr>
                        <!-- </template> -->
                    </template>
                
                </tbody>
            </table>
        </main>

        <footer class="footer">
            <div class="pagination">

                <span class="pagination__text">  items per page: </span>
                <!-- <MyDropDown @callback="(val) => setItemPerPage(val)"></MyDropDown> -->
                <MyDropDown></MyDropDown>
                <span class="pagination__text"> page: {{ currentPage }} of {{totalPages}} </span>
                <Svg class="icon" name="page-first"  @click="changePage('start')"></Svg>
                <Svg class="icon" name="chevron-left" @click="changePage(-1)"></Svg>
                <Svg class="icon" name="chevron-right" @click="changePage(+1)"></Svg>
                <Svg class="icon" name="page-last" @click="changePage('end')"></Svg>

                <span class="pagination__text"> items: {{data.tbody.length}} </span>

            </div>
        </footer>
        <!-- <MyDropDown></MyDropDown> -->
    </div>
    <!-- <MyDropDown @callback="(val) => setItemPerPage(val)"></MyDropDown> -->

</template>


<style lang="sass" scoped>
$height__row: 3rem
$height__headerFooter: 2rem

.v-select
    width: 5rem

.custom-table
    width: 100%
    

.main
    overflow-y: auto
    width: 100%
    max-height: 100%
    max-height: calc(100% - 2* $height__headerFooter)
    table
        width: 100%
        border-collapse: collapse
        
        background: white
        thead    
            user-select: none
            cursor: pointer
            background: #a0c9ff
            position: sticky
            top: 0
            tr
                height: $height__row
                th
                    font: unset
                    width: 9rem
                    &:first-child 
                        padding-left: 1rem
                    &:hover 
                        .th__icon:not(.visible)
                            opacity: 0.5
                    .th__content
                        display: flex
                        gap: .25rem
                    .th__icon
                        opacity: 0
                        width: 1.25rem
                        transition: all .18s
                        &.visible
                            opacity: 1
                        &.rotate
                            transform: rotate(180deg)
        tbody
            tr
                height: $height__row
                &:nth-child(2n)
                    background: #bebebe
                td
                    &:first-child 
                        padding-left: 1rem
header
    height: $height__headerFooter
    position: sticky
    background: #dddddd
    top: 0
    left: 0
    user-select: none
    .header__input
        background: white
        width: 30%
        min-width: min-content
        height: 100%
    
 

footer
    height: $height__headerFooter
    position: sticky
    // position: static
    // z-index: 10 //for dropdown not covering
    z-index: 10 //for dropdown not covering
    user-select: none

    background: #dddddd
    bottom: 0
    left: 0
    .pagination
        display: flex
        gap: .5rem
        margin-left: 1rem
        height: 100%
        align-items: center

        .pagination__text
            margin-right: .5rem
.icon
    width: 1.5rem
    fill: black
    
</style>
