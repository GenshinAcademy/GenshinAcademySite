<template>
  <!-- Boosty -->
  <div class="mt_80 full-width">
    <div class="minh_400 bg_200 full-width block_column align-center overflow">
      
      <div class="container block_row">
        <div class="block_column flex_3 gap-20 relative z_2">
          <p class="text_title lineh_125p">{{ $t("main.support") }}</p>
          <p class="text_body2 text_font-sub lineh_125p">{{ $t("main.supportText") }}</p>
          <a
              href="https://boosty.to/genshinacademy"
              class="button button_outline-white fit-content mt_10"
              target="_blank"
          >
            {{ $t("main.supportButton") }}
          </a>
        </div>
        
        <div class="boosty__img block_column flex_5 relative">
          <img class="z_1 max_576" src="/img/optimized/boosty.webp" alt="boosty">
          <img class="z_1 min_576" src="/img/optimized/boosty_576.webp" alt="boosty">
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.boosty__img {
  img {
    position: absolute;
    right: -400px;
  }
  
  @include max-desktop_768 {
    flex: 2 !important;
    img {
      right: -690px;
    }
  }
  
  @include max-desktop_576 {
    flex: unset !important;
    img {
      right: -340px;
      bottom: -390px;
    }
  }
}


</style>