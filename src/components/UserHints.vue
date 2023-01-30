<template>
  <div class="hint" v-if="store.hint !== ''">
    <p>{{ store.hint }}</p>
    <p class="hint__close" @click="store.clearHint">х</p>
  </div>

</template>

<script lang="ts" setup>

  import {watch} from "vue";
  import {useHintStore} from "@/stores/hint.js";

  const store = useHintStore()

  watch(store, () => {

    setTimeout(() => {
      store.clearHint()
    }, 4000)

  }, {deep: true})

</script>

<style lang="scss">
  .hint {
    display: flex;
    align-items: center;
    gap: 10px;

    position: fixed;
    bottom: 20px;
    left: 20px;
    background: #3E6238;
    padding: 10px;
    border-radius: 10px;

    &__close {
      cursor: pointer;
      padding: 10px;

      &:hover {
        background: $bg_light_1;
      }
    }
  }
</style>