<template>
  <div class="container block_column  gap-30">
    <h2 id="tools" class="full-width mt_80">{{ $t("header.tools") }}</h2>
    
    <!-- Table -->
    <div class="block_row card bg_200 p50 overflow full-width">
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">{{ $t("table.tableTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("table.tableBody") }}</p>
        <router-link to="/tables" class="fit-content">
          <button class="button button_outline-white fit-content mt_10">{{ $t("main.openPage") }}</button>
        </router-link>
      </div>
      
      <div class="block_column flex_4 relative">
        <img class="traveler__img" src="/img/traveler.png" alt="traveler">
      </div>
    </div>
    
    <!-- Ferret -->
    <div class="block_row card bg_200 p50 overflow full-width">
      <div class="block_column flex_3 relative">
        <img class="weasel__img" src="/img/weasel.png" alt="traveler">
      </div>
      
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">{{ $t("weasel.weaselTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("weasel.weaselBody") }}</p>
        <router-link to="/weasel" class="fit-content">
          <button class="button button_outline-white fit-content mt_10">{{ $t("main.openPage") }}</button>
        </router-link>
      </div>
    </div>
    
    <!-- Guide -->
    <div class="block_row card bg_200 p50 overflow full-width">
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">{{ $t("guide.guideTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("guide.guideBody") }}</p>
        <a href="https://teletype.in/@genshinacademy/mini-guides" target="_blank" class="fit-content">
          <button class="button button_outline-white fit-content mt_10">{{ $t("main.openPage") }}</button>
        </a>
      </div>
      
      <div class="block_column flex_4 relative">
        <img class="traveler__img" src="/img/guide.png" alt="traveler">
      </div>
    </div>
    
    <!-- Dev -->
    <div class="block_row gap-30 align-stretch">
      <div class="card p50 block_column gap-10 full-width justify-start">
        <p class="text_title lineh_125p">{{ $t("dungeon.dungeonTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("dungeon.dungeonBody") }}</p>
        <p class="text_active mt_20">{{ $t("main.onDev") }}</p>
      </div>
      
      <div class="card p50 block_column gap-10 full-width justify-start">
        <p class="text_title lineh_125p">{{ $t("weapon.weaponTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("weapon.weaponBody") }}</p>
        <p class="text_active mt_20">{{ $t("main.onDev") }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.traveler__img {
  position: absolute;
  right: -50px;
}

.weasel__img {
  position: absolute;
  left: -50px;
  top: -155px;
}
</style>