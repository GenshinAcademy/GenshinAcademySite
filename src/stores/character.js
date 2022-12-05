import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/HttpConfig.js";

export const useCharacterStore = defineStore("character", () => {
  const user_art = ref({
    art: "",
    main: {},
    sub_stats: [],
  });

  const default_art = ref({
    art: "flower",
    main: {
      name: "HP",
      value: "HP",
    },
    sub_stats: [],
  });

  const sort = ref({
    best: [],
    good: [],
    normal: [],
    bad: [],
  });

  const heroes = ref([]);

  /** Проверяет есть ли сохраненные артефакты пользователя */
  function is_user_art() {
    if (!user_art.value.main.hasOwnProperty("name")) {
      user_art.value = default_art.value;
    }
  }

  //Todo: Сделать вывод ошибки для пользователя
  /**
   * Получает персонажей с сервера
   */
  function get_hero() {
    axios
      .get("/characters/stats")
      .then((res) => {
        heroes.value = res.data.data;
      })
      .catch((error) => {
        alert('Axios Error: Check console, for more details...');
        console.log(error);
      });
  }

  /** Очищает все характеристики артефакта пользователя */
  function art_clear() {
    user_art.value = {
      art: "",
      main: {},
      sub_stats: [],
    };
  }

  /** Сбрасывает сортировку */
  function sort_default() {
    sort.value = {
      best: [],
      good: [],
      normal: [],
      bad: [],
    };
  }

  /**
   * Считает баллы персонажа и отправляет их в сортировку
   *
   * @param {Object} user - Артефакты пользователя
   */
  function ferret(user) {
    sort_default();
    heroes.value.filter((h) => {
      let score = 0;

      //Баллы за Основной стат
      if (h.statsProfit[user.art][user.main.value] !== undefined)
        score = h.statsProfit[user.art][user.main.value];

      //Если выбран арт с элементом
      if (user.main.value === h.element)
        score = h.statsProfit[user.art].ELEM;

      //Баллы за все побочные статы
      user.sub_stats.map((stat) => {
        score += h.statsProfit.substats[stat];
      });

      let i = {
        id: h.id,
        name: h.name,
        // icon_url: h.icon_url,
        stats_profit: score,
      };

      sorted(i);
    });
  }

  /**
   * Сортирует персонажей по категориям
   *
   * @param {Object} hero - Один персонаж
   */
  function sorted(hero) {
    const categories = ["best", "good", "normal", "bad"];
    const a = [400, 370, 340, 300];

    /**
     * if Исключает всех героев у кого баллов меньше 300,
     * хороший вариант, чтобы не перегружать интерфейс
     */
    for (let i = 0; i < a.length; i++) {
      if (hero.stats_profit >= Number(a[i])) {
        sort.value[categories[i]].push(hero);
        break;
      }
    }
  }

  return { user_art, sort, get_hero, art_clear, ferret, is_user_art };
});
