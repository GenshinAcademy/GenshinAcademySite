<template>
  <div
    id="tableHeader"
    class="card container align-stretch p50"
  >
    <div class="block_column full-width gap-20">
      <div
        class="block_column full-width gap-20"
        v-for="(conf, index ) in config"
        v-show="conf.Title"
      >
        <p
          class="divider"
          v-if="index !== 0 && config[index - 1].Title"
        ></p>

        <div class="block_row justify-between table__title gap-30 align-center full-width">
          <div class="block_row table__title">
            <img
              class="table__image"
              :src="conf.Icon"
              v-if="conf.Icon"
              alt="icon"
            />

            <div class="block_column gap-10">
              <p v-if="conf.Title">{{ conf.Title }}</p>
              <p
                class="text_gray_500 text_font-sub"
                v-if="conf.Description"
              >{{ conf.Description }}</p>
            </div>
          </div>

          <a
            class="image_align text_vBold text_font-sub p5"
            target="_blank"
            @click="clickEvent('table', 'tables', 'Table with ID #' + conf.Id + ' Clicked', 1)"
            :href="conf.RedirectUrl"
          >
            <img
              src="/img/icon/other/document.svg"
              alt="document"
            >
            {{ $t("tables.go") }}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup lang='ts'>

import { useTablesStore } from "@/stores/tables";
import { ref, watchEffect } from "vue";
import { ITablesResponse } from "@/scripts/models/Tables";

import { clickEvent } from "@/scripts/analytics";


const store = useTablesStore();
store.useGetTables();

const config = ref<ITablesResponse[]>([]);

watchEffect(() => {
  config.value = store.tables;
});

</script>


<style lang='scss' scoped>
@media (max-width: 576px) {
  .table__title {
    flex-direction: column;
    align-items: flex-start !important;
  }
}

.table__image {
  max-width: 50px;
  width: 100%;
}
</style>