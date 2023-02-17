<template>
  <div class="container block_column  gap-30">
    <h2 class="full-width mt_80">Инструменты</h2>
    
    <!-- Traveler -->
    <div class="block_row card bg_200 p50 overflow">
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">Таблицы</p>
        <p class="text_body2 text_font-sub lineh_125p">Силы наложения статусов GU, откаты наложения статусов ICD,
          снапшоты и прочие
          сложные
          штучки
          — ссылки на все таблицы от Genshin Academy можно найти здесь.</p>
        <button class="button button_outline-white fit-content mt_10">Открыть страницу</button>
      </div>
      
      <div class="block_column flex_4 relative">
        <img class="traveler__img" src="/img/traveler.png" alt="traveler">
      </div>
    </div>
    
    <!-- Ferret -->
    <div class="block_row card bg_200 p50 overflow">
      <div class="block_column flex_3 relative">
        <img class="ferret__img" src="/img/ferret.png" alt="traveler">
      </div>
      
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">Хорёк-оценщик</p>
        <p class="text_body2 text_font-sub lineh_125p">Он оценивает артефакты и говорит, каким персонажам они могут
          подойти. Не можешь решить, оставить артефакт или отправить на «корм»? Хорёк-оценщик поможет!</p>
        <button class="button button_outline-white fit-content mt_10">Открыть страницу</button>
      </div>
    </div>
    
    <!-- Guide -->
    <div class="block_row card bg_200 p50 overflow">
      <div class="block_column gap-10 flex_5">
        <p class="text_title lineh_125p">Сборник гайдов</p>
        <p class="text_body2 text_font-sub lineh_125p">Мини-гайды на всех персонажей: сборки артефактов, оружия,
          созвездия. Плюс
          мини-гайды на оружия. Постепенно обновляются.</p>
        <button class="button button_outline-white fit-content mt_10">Открыть страницу</button>
      </div>
      
      <div class="block_column flex_4 relative">
        <img class="traveler__img" src="/img/guide.png" alt="traveler">
      </div>
    </div>
    
    <!-- Dev -->
    <div class="block_row gap-30 align-stretch">
      <div class="card p50 block_column gap-10 full-width justify-start">
        <p class="text_title lineh_125p">Компас подземелий</p>
        <p class="text_body2 text_font-sub lineh_125p">Подскажет наиболее выгодные подземелья для фарма исходя из
          выбранных вами
          персонажей.</p>
        <p class="text_active mt_20">В разработке</p>
      </div>
      
      <div class="card p50 block_column gap-10 full-width justify-start">
        <p class="text_title lineh_125p">Эксперт по оружию</p>
        <p class="text_body2 text_font-sub lineh_125p">Знает всё об оружии и каким персонажам они подходят.
          Автоматически анализирует
          оружейные баннеры!</p>
        <p class="text_active mt_20">В разработке</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .traveler__img {
    position: absolute;
    right: -50px;
  }
  
  .ferret__img {
    position: absolute;
    left: -50px;
    top: -155px;
  }
</style>