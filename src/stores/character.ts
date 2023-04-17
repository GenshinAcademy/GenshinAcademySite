import { ArtStat, characterStats, Elements, Stat, Substats } from '@/scripts/models/weaselAppraiser';
import { defineStore } from "pinia";
import { ref } from "vue";
import axios, { httpRoute } from "@/HttpConfig.js";
import { Logger } from "tslog";
import { test_data } from "@/stores/test";

export const useCharacterStore = defineStore("character", () => {
  const logger = new Logger({ name: "characterLogger", minLevel: import.meta.env.VITE_LOG_LEVEL });
  
  const elements = ref<Elements[]>(['UndefinedElement', 'Pyro', 'Hydro', 'Geo', 'Anemo', 'Electro', 'Cryo', 'Dendro',])
  
  
  interface ChosenArtifact {
    slot: string,
    main_stat: Stat,
    sub_stats: string[];
  }
  
  const default_art: ChosenArtifact = {
    slot: "flower",
    main_stat: {
      name: "HP",
      value: "HP",
    },
    sub_stats: [],
  };
  
  const chosen_art = ref<ChosenArtifact>(default_art);
  
  
  interface CharacterResult {
    id: string,
    name: string,
    icon_url: string,
    stats_profit: number;
  }
  
  const sortedCharactersStats = ref<CharacterResult[][]>([]);
  
  const charactersList = ref<characterStats[]>([]);
  
  /** Помогает убрать превью, после нажатия "Оценки" */
  const appraiser_start = ref(false);
  
  /** Получает персонажей с сервера */
  function get_hero() {
    axios
      .get(httpRoute.characters)
      .then((res) => {
        logger.trace('Fetching character stats');
        charactersList.value = res.data;
      })
      .catch((error) => {
        logger.error(error.message);
      });
    
    charactersList.value = test_data;
  }
  
  /** Очищает все характеристики артефакта пользователя
   *  Todo: Понять почему, default_art ломается и перезаписывается.
   *  Сейчас временное решение
   * */
  function art_clear() {
    chosen_art.value.main_stat = {
      name: "",
      value: "",
    };
    chosen_art.value.sub_stats = []
  }
  
  interface Tier {
    name: string,
    value: number;
  }
  
  const tiers: Tier[] = [
    {
      name: 'S',
      value: 400
    },
    {
      name: 'A',
      value: 370
    },
    {
      name: 'B',
      value: 340
    },
    {
      name: 'C',
      value: 300
    },
  ];
  
  /** Сбрасывает сортировку */
  function sort_default() {
    sortedCharactersStats.value = [];
  }
  
  /** Считает А, проверка типа, если у персонажа меньше 4 сабстатов */
  function sumA(sum: number | string, number: number | string) {
    if (typeof sum !== 'string' && typeof number !== 'string')
      return sum + number;
    else return 0
  }
  
  /**
   * Считает баллы персонажа и отправляет их в сортировку
   *
   * @param {Object} chosenArtifact - Артефакты пользователя
   */
  function weasel(chosenArtifact: ChosenArtifact) {
    sort_default();
    
    charactersList.value.filter((char) => {
      
      /** substats всегда последний */
      const substats = char.stats_profit.length - 1;
      let selectSlot: ArtStat = { slot: '' };
      
      /** Обнуляю main stat */
      const newTableSub = { ...char.stats_profit[substats] };
      
      newTableSub[chosenArtifact.main_stat.value as keyof Substats] = 0;
      
      /** Пересобираю substats в массив, для удобной сортировки */
      let subList: number[] = [];
      
      for (let n in newTableSub) {
        subList.push(<number>newTableSub[n as keyof Substats]);
      }
      
      /** Выбираю 4 наибольших substats */
      subList = subList.sort((a, b) => a - b).slice(-4);
      
      let A = subList.reduce((sum, number) => sumA(sum, number));
      A = A * 0.75;

      /** Нахожу вес лучшей основы */
      let weight: number = 0;
      let stats: ArtStat = selectSlot;
      
      
      char.stats_profit.forEach((artSlot, index) => {
        if (artSlot.slot === chosen_art.value.slot) {
          selectSlot = artSlot;
          stats = artSlot
        }
      })
      
      weight = Object.entries(stats).reduce((prev, curr) => prev[1] > curr[1] ? prev : curr)[1]
      
      /** Находим взешенный сабстаты */
      
      let weightSub: Substats = { ...char.stats_profit[substats] }
      let subName
      
      for (subName in char.stats_profit[substats]) {
        
        if (subName !== 'slot') { // @ts-ignore
          weightSub[subName] = (((400 - weight) / A) * char.stats_profit[substats][subName])
        }
      }
      
      
      /** Оценка артефактов по выбранным сабстатам */
      let sumWeightSub = 0;
      
      chosen_art.value.sub_stats.map((value) => {
        if (weightSub[value as keyof Substats])
          // @ts-ignore
          sumWeightSub += weightSub[value as keyof Substats];
        else
          sumWeightSub += 0
      });
      
      
      /** Сумма */
      let score: number = 0
      
      
      if (selectSlot[chosen_art.value.main_stat.value as keyof ArtStat])
        // @ts-ignore
        score = selectSlot[chosen_art.value.main_stat.value as keyof ArtStat] + sumWeightSub
      else
        score = sumWeightSub
      
      /** Проверка на элемент */
      elements.value.forEach((value, index) => {
        /** Проверка pyro === pyro && 1 === 1 */
        if (value === chosen_art.value.main_stat.value && index === char.element) {
          if (selectSlot.ELEM)
            score = selectSlot.ELEM + sumWeightSub;
        }
      })
      
      
      let i = {
        id: char.character_id,
        name: char.name,
        icon_url: char.icon_url,
        stats_profit: score,
      };
      
      logger.debug({
        id: char.character_id,
        name: char.name,
        weight: weight,
        weightSub: weightSub,
        stats_profit: score,
      });
      
      putToTier(i);
    });
  }
  
  /**
   * Сортирует персонажей по категориям
   *
   * @param {Object} character - Один персонаж
   */
  function putToTier(character: CharacterResult) {
    /**
     * if Исключает всех героев у кого баллов меньше 300
     */
    for (let i = 0; i < tiers.length; i++) {
      if (character.stats_profit >= tiers[i].value) {
        
        /** Инициализация Многомерного массива */
        if (!sortedCharactersStats.value[i]) {
          sortedCharactersStats.value[i] = []
        }
        
        sortedCharactersStats.value[i].push(character);
        break;
      }
    }
    
    /** Убирает превью */
    appraiser_start.value = true;
  }
  
  return { chosen_art, sortedCharactersStats, appraiser_start, get_hero, art_clear, weasel };
});
