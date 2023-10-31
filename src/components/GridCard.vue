<template>
    <div class="grid-card">
        <slot></slot>
    </div>
</template>


<style lang="sass">
@import '@assets/main'
$width__wrap-switch--area-grid__c: 80rem

.grid-card
  display: grid
  gap: 3rem 
  margin: 1rem
  justify-content: safe start
  grid-template-columns: repeat(1, 95%)

  @container (min-width: #{$width__wrap-switch--area-grid__c})  
    grid-template-columns: repeat(2, 1fr)

</style>