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
        
        <div class="block_column flex_5 relative">
          <img class="boosty__img z_1" src="/img/boosty.png" alt="boosty">
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.boosty__img {
  position: absolute;
  right: -400px;
}
</style>