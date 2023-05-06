<template>
  <div class="container block_column gap-30">
    <h2 id="tools" class="full-width mt_80">{{ $t("header.tools") }}</h2>
    
    <!-- Table -->
    <div class="tool__block block_row card bg_200 p50 overflow full-width">
      <div class="relative block_column gap-10 flex_5 z_2">
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
    
    <!-- Weasel -->
    <div class="tool__block weasel__block block_row card bg_200 p50 overflow full-width">
      <div class="block_column flex_3 relative">
        <img class="weasel__img max_992" src="/img/weasel.png" alt="traveler">
        <img class="weasel__img_2 max_576 min_992" src="/img/weasel_bg.png" alt="weasel_bg">
        <img class="weasel__img_2 min_576" src="/img/weasel_bg_576.png" alt="weasel_bg">
      </div>
      
      <div class="relative block_column gap-10 flex_5 z_2">
        <p class="text_title lineh_125p">{{ $t("weasel.weaselTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("weasel.weaselBody") }}</p>
        <router-link to="/weasel" class="fit-content">
          <button class="button button_outline-white fit-content mt_10">{{ $t("main.openPage") }}</button>
        </router-link>
      </div>
    </div>
    
    <!-- Guide -->
    <div class="tool__block block_row card bg_200 p50 overflow full-width">
      <div class="relative block_column gap-10 flex_5 z_2">
        <p class="text_title lineh_125p">{{ $t("guide.guideTitle") }}</p>
        <p class="text_body2 text_font-sub lineh_125p">{{ $t("guide.guideBody") }}</p>
        <a href="https://teletype.in/@genshinacademy/mini-guides" target="_blank" class="fit-content">
          <button class="button button_outline-white fit-content mt_10">{{ $t("main.openPage") }}</button>
        </a>
      </div>
      
      <div class="block_column flex_4 relative">
        <img class="guide__img" src="/img/guide.png" alt="traveler">
      </div>
    </div>
    
    <!-- Dev -->
    <div class="dev__tools block_row gap-30 align-stretch">
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

<style lang="scss" scoped>
.traveler__img, .guide__img {
  position: absolute;
  right: -50px;
}

.weasel__img {
  position: absolute;
  left: -50px;
  top: -155px;
}

.weasel__img_2 {
  position: absolute;
  right: -650px;
  top: -400px;
}

@include max-desktop_992 {
  .flex_4, .flex_3 {
    flex: 1 !important;
  }
  
  .traveler__img {
    right: -300px;
  }
  
  .guide__img {
    right: -165px;
  }
  
  .weasel__block {
    flex-direction: row-reverse;
  }
  
  .tool__block {
    max-height: 280px;
  }
}

@include max-desktop_768 {
  .tool__block {
    padding: 40px !important;
  }
}

@include max-desktop_576 {
  .flex_4, .flex_3 {
    flex: unset !important;
  }
  img {
    opacity: 0.8;
    filter: blur(2px);
  }
  
  .weasel__img_2 {
    right: -80px;
    top: -220px;
  }
  
  .text_title {
    white-space: nowrap;
  }
  
  .tool__block {
    max-height: unset;
  }
  
  .traveler__img {
    scale: 1.2;
    right: -350px;
  }
  
  .guide__img {
    right: -190px;
  }
}


@include max-desktop_480 {
  .container {
    margin: 0 !important;
  }
  img {
    //display: none;
  }
}

.dev__tools {
  @include max-desktop_768 {
    flex-direction: column;
  }
  @include max-desktop_480 {
    & .card {
      padding: 30px !important;
      
      .text_title {
        white-space: normal !important;
      }
    }
  }
}

@include min-desktop_768 {
  .tool__block:hover {
    & .traveler__img, & .guide__img {
      scale: 1.1;
      transform: translate(-20px, -10px);
    }
    
    & .weasel__img {
      scale: 1.1;
      transform: translate(20px, -10px);
    }
  }
}

</style>