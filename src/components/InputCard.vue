<script setup>
// value such field of json
import MyBtn from '@components/MyBtn.vue'
import InputText from '@components/InputText.vue'
import sliderToggle from '@components/sliderToggle.vue'
import Svg from '@components/Svg.vue'
import { ref,toRaw, watch } from 'vue'



const props = defineProps({
    dataFields: Object,
    btnApplyName: String
})

// emits
const emits = defineEmits(['callback'])
function callback(){
    emits('callback')
}

const localData = ref(props.dataFields);

function addRow(){
    let entry = JSON.parse(JSON.stringify(toRaw(localData.value.multiple[0]))) //deep copy   
    entry.value = entry.type=='input' ? '' : false
    for (let key in entry.children.values) {
        entry.children.values[key].value = entry.children.values[key].type=='slider' ? false : ''
    }
    localData.value.multiple.push(entry)
}
function delRow(index){
    if (localData.value.multiple.length > 1 ){
        localData.value.multiple.splice(index, 1)
    }
 }

// watch(
//     () => localData,
//     (newData) => {
// }, { deep: true }
// )

///////////////////////// Yet useless
// drag and drop priority changing
const dragDrop = (event, item, index) => {
    if (localData.value.multiple.length==1){
        return 0
    }
    let dataCopy = JSON.parse(JSON.stringify(localData.value.multiple))
    console.log('draggg')

    // create wrap
    let wrap = document.createElement('table');
    wrap.classList.add('card-form__table_draggable');
    let tr = document.getElementById(index + 'row')

    // get width tr elements
    for(var child=tr.firstChild; child!==null; child=child.nextSibling) {
        child.style.width = child.getBoundingClientRect().width + 'px'
    }
    // get height and width
    let trSize = tr.getBoundingClientRect()

    wrap.style.position = 'absolute';
    wrap.style.zIndex = 1000;
    wrap.style.height = trSize.height + 'px'
    wrap.style.width = trSize.width + 'px'
    wrap.appendChild(tr);
    

    document.body.append(wrap);
    

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp)
    
    
    console.log('offset',event.pageX)

    function onMouseMove(event) {
        wrap.style.left = trSize.left + 'px';
        wrap.style.top = event.pageY - wrap.offsetHeight / 2 + 'px';
    }

    function onMouseUp(e){
        // insert and delete rows
        // dataCopy.push(item)
        // localData.value.multiple = dataCopy
        document.removeEventListener('mousemove', onMouseMove)
        document.removeEventListener('mouseup', onMouseUp);
        wrap.remove()
    }
    function placeRow(mouseY){
        let prependRow = null
        const dragrows = Array.from(document.getElementsByClassName('dragrow'))
        dragrows.forEach((row, index) => {
            const rect = row.getBoundingClientRect();
            if (mouseY > rect.top && mouseY < rect.bottom) {
                console.log(mouseY, rect.top, rect.bottom)

                prependRow =  row.id
                return
            }
        })
        if (prependRow != null){
            // console.log('for', prependRow)
            return prependRow
        }
        else{
            let rectFirstRow = dragrows[0].getBoundingClientRect()
            prependRow = (mouseY > rectFirstRow.bottom) ? dragrows[dragrows.length-1].id : dragrows[0].id
            // console.log('after for', prependRow)
            return prependRow
        }
    }
}

/////////// Yet Useful
const moveItem = (index, direction) => {
    if (direction === 'up' && index > 0) {
    // Передвигаем элемент вверх
        [localData.value.multiple[index - 1], localData.value.multiple[index]] = [localData.value.multiple[index], localData.value.multiple[index - 1]];
    } 
    else if (direction === 'down' && index < localData.value.multiple.length - 1) {
    // Передвигаем элемент вниз
        [localData.value.multiple[index + 1], localData.value.multiple[index]] = [localData.value.multiple[index], localData.value.multiple[index + 1]];
    }
};



function clickHandle(icon, index){
    if (icon=='delete'){
        delRow(index)
    }
    else if (icon.includes('arrow')){
        let direction = icon.split('-')[1]
        moveItem(index, direction)
    }
}

</script>

<template>
<div class="card-form">
    <table class="card-form__table">
        <thead>
            <tr>
                <td></td>
                <td colspan="2">{{localData.head.text}}</td>
            </tr>
        </thead>
        <tbody>
            <template v-for="item in localData.single">
                <tr >
                    <td class="card-form__col-name"> {{ item.name }} </td>
                    <td colspan="2">
                        <InputText v-if="item.type=='input'" placeholder="значение" :value="item.value" @callback="(val) => item.value = val"/>
                        <audio v-else-if="item.type=='audio'" class="audio" controls src="" type="audio/mpeg"></audio>
                    </td>
                </tr>
            </template>


                <template v-for="(item, index) in localData.multiple" >
                    
                <tr :id="index + 'row'">
                    <td class="card-form__col-name"> {{ item.name }} </td>
                    <td v-if="item.type=='input'">
                        <InputText placeholder="значение" :value="item.value" @callback="(val) => item.value = val"/>
                    </td>
                    <td v-if="item.children">
                        <div class="card-form__flex-container">

                            <template v-for="el in item.children.values">
                                <div class="card-form__flex-item"> 
                                    <sliderToggle v-if=" el.type == 'slider'" :value="el.value" @callback="(val) => el.value = val" />
                                    <span v-if="el.name"> {{ el.name }} </span>
                                </div>    
                            </template>   

                            <template v-for="el in item.children.other">
                                <div class="card-form__flex-item"> 
                                    <Svg
                                        v-if=" el.type == 'icon'"  
                                        class="card-form__icon" 
                                        :name="el.icon"
                                        @click="clickHandle(el.icon, index)"
                                        :disabled="(el.icon == 'arrow-up' && index==0) || (el.icon == 'arrow-down' && index==localData.multiple.length - 1)"
                                        >
                                        <!-- @click="el.icon == 'delete' ? delRow(index) : ''" -->
                                    </Svg>   
                                </div>    
                            </template>   

                        </div>
                    </td>
                </tr>
            </template>

            <tr v-if="dataFields.hasOwnProperty('multiple')">
                <td  class="card-form__col-name">
                    <MyBtn @click="addRow"> <Svg class="card-form__icon_plus" name="plus"></Svg> </MyBtn>
                </td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td colspan="3" class="card-form__bottom"><MyBtn @click="callback">{{ btnApplyName }}</MyBtn></td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<style lang="sass">
@import '@assets/main'

.audio
    width: 100%
    height: calc(2rem + 2px)  // 2px это border input, форма input 34px
    background: white
    &::-webkit-media-controls-enclosure
        background-color: white
    &::-webkit-media-controls-panel
        padding: 0



.card-form
    display: flex
    justify-content: center
    background: #ebebeb
    min-width: max-content 
    height: max-content
    padding: .5rem 2rem .5rem 1rem
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    transition: flex-wrap 0.5s ease
    .card-form__table
        table-layout: auto 
        margin: 0
        user-select: none
        width: 100%
        height: max-content
        tr
            &:hover
                cursor: pointer
            height: 3rem
            td
                padding: 0  //delete default padding
            td:first-child
                width: 0 //for grow disabling td
            td:last-child
                width: 0 //for grow disabling td

        .card-form__bottom
            text-align: center

        .card-form__col-name
            text-align: right
            font-family: Roboto
            font-weight: 100
            font-size: 1rem
            padding-right: 1rem

        .card-form__icon_plus
            width: 1.25rem
            cursor: pointer
            fill: white 

        .card-form__flex-container
            display: flex
            justify-content: center
            margin: 0 2rem
            gap: 2rem
            

            .card-form__flex-item
                display: flex
                align-items: center
                gap: .5rem
                color: green
                .card-form__icon
                    width: 1.5rem
                    cursor: pointer
                    fill: black 
                    &[disabled=true]
                        fill: #c2c2c2


table.card-form__table_draggable
        &:hover
            cursor: pointer
        background: #c8d8d8
        table-layout: auto 
        margin: 0
        user-select: none
        width: 100%
        height: max-content
        tr
            width: 100%
            height: 3rem
            td
                padding: 0  //delete default padding
            td:first-child
                width: 0 //for grow disabling td
            td:last-child
                width: 0 //for grow disabling td

        .card-form__bottom
            text-align: center

        .card-form__col-name
            text-align: right
            font-family: Roboto
            font-weight: 100
            font-size: 1rem
            padding-right: 1rem

        .card-form__icon_plus
            width: 1.25rem
            cursor: pointer
            fill: white 

        .card-form__flex-container
            display: flex
            justify-content: center
            margin: 0 2rem
            gap: 2rem
            

            .card-form__flex-item
                display: flex
                align-items: center
                gap: .5rem
                .card-form__icon
                    width: 1.5rem
                    cursor: pointer
                    fill: black 
</style>

