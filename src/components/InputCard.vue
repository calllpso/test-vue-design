<script setup>
// value such field of json
import MyBtn from '@components/MyBtn.vue'
import InputText from '@components/InputText.vue'
import sliderToggle from '@components/sliderToggle.vue'
import Svg from '@components/Svg.vue'
import { ref,toRaw, reactive } from 'vue'



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
                        <InputText v-if="item.type=='input'" placeholder="value" :value="item.value" @callback="(val) => item.value = val"/>
                        <audio v-else-if="item.type=='audio'" class="audio" controls src="" type="audio/mpeg"></audio>
                    </td>
                </tr>
            </template>


            <template v-for="(item, index) in localData.multiple" >
                <tr>
                    <td class="card-form__col-name"> {{ item.name }} </td>
                    <td v-if="item.type=='input'">
                        <InputText placeholder="value" :value="item.value" @callback="(val) => item.value = val"/>
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
                                        @click="el.icon == 'delete' ? delRow(index) : ''">
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

<style lang="sass" scoped>
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
    // background: #CBCBCB
    background: #ebebeb
    min-width: max-content 
    height: max-content
    // border-radius: .5rem   
    padding: .5rem 2rem .5rem 1rem
    // padding: .5rem 

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)
    
    transition: flex-wrap 0.5s ease
    .card-form__table
        table-layout: auto 
        margin: 0
        user-select: none
        width: 100%
        height: max-content
        tr
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
                // margin-right: auto
                gap: .5rem
                .card-form__icon
                    width: 1.5rem
                    cursor: pointer
                    fill: black 
</style>

