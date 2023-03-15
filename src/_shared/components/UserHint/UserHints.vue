<template>
  <div class="hint p10" v-if="store.hint !== ''">
    <p>{{ store.hint }}</p>
    <a class="hint__close p10" @click="store.clearHint">х</a>
  </div>

</template>

<script lang="ts" setup>

  import {watch} from "vue";
  import {useHintStore} from "@/stores/hint";

  const store = useHintStore()

  watch(store, () => {

    setTimeout(() => {
      store.clearHint()
    }, 4000)

  }, {deep: true})

</script>

<style lang="scss" scoped>
  .hint {
    @extend .block_row;
    
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: $success_0;
    border-radius: 10px;
  }
</style>