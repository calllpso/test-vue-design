<script setup>
import { defineAsyncComponent } from 'vue';



const props = defineProps({
    name: {

        type: String,
        required: true
    }
})

const icon = defineAsyncComponent( () =>
    import(`@icons/${props.name}.svg`) 
)

</script>

<template>
    <!-- {{ icon }} -->
<component :is="icon" />

</template>