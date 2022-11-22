import {defineStore} from 'pinia';
import {ref} from 'vue';

export const useCharacterStore = defineStore('character', () => {

  const user_art = ref({
    main: {
      art: 'flower',
    },
    sub_stats: [],
  })

  function artClear() {
    user_art.value.main = {}
    user_art.value.sub_stats = []
  }

  const heroes = ref([
    {
      "name": "Hu Tao",
      "icon_url": "Geo.png",
      "stats_profit": {
        "flower": {
          "HP": 100,
        },
        "feather": {
          "ATK": 100,
        },
        "sands": {
          "ATK_P": 100,
          "DEF_P": 100,
          "HP_P": 100,
          "EM": 100, //elemental mastery, мастерство стихий
          "ER": 100, //energy recharge, восстановление энергии
        },
        "goblet": {
          "ATK_P": 100,
          "DEF_P": 100,
          "HP_P": 100,
          "EM": 100,
          "PHYS": 100,
          "PYRO": 100,
          "HYDRO": 100,
          "DENDRO": 100,
          "ELECTRO": 100,
          "ANEMO": 100,
          "CRYO": 100,
          "GEO": 100,
        },
        "circlet": {
          "ATK_P": 100,
          "DEF_P": 100,
          "HP_P": 100,
          "EM": 100,
          "CR": 100, //crit rate
          "CD": 100, //crit damage
          "HEAL": 100,
        },
        "substats": {
          "ATK": 100,
          "ATK_P": 0,
          "DEF": 100,
          "DEF_P": 100,
          "HP": 100,
          "HP_P": 100,
          "EM": 100,
          "ER": 100,
          "CR": 100,
          "CD": 100,
        }
      }
    }
  ]);


  return {user_art, heroes, artClear};
});