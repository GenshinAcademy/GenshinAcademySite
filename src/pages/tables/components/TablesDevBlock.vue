<template>
  <div class="card container align-stretch p50">
    <div class="block_column full-width gap-20" v-for="conf in configDev">
      <div class="block_row justify-between table__title gap-30 align-center full-width">
        <div class="block_row table__title">
          <p :class="'icon ' + conf.icon"></p>
          
          <div class="block_column gap-10">
            <p>{{ $t("tables.dev.title") }}</p>
            <p class="text_gray_500 text_font-sub">{{ $t("tables.dev.body") }}</p>
          </div>
        </div>
        
        <p class="image_align text_vBold text_font-sub text_gray_500 p5">
          {{ $t("tables.dev.message") }}
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang='ts'>

const configDev = [
  {
    icon: 'icon-PHYS',
    title: 'Каталог бонусов',
    body: 'Все возможные бонусы в игре, отсортированные по типам.'
  },
]
</script>


<style lang='scss' scoped>
@media (max-width: 576px) {
  .table__title {
    flex-direction: column;
    align-items: flex-start !important;
  }
}
</style>