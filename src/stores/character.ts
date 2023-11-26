import { AllStats, ArtProfit, CharacterStats, Stat } from '@/scripts/models/weaselAppraiser';
import { defineStore } from "pinia";
import { ref } from "vue";
import axios, { httpRoute } from "@/HttpConfig.js";
import { Logger } from "tslog";
import { ElementsEnum } from "@/scripts/enums/elements";

export const useCharacterStore = defineStore("character", () => {
  const logger = new Logger({ name: "characterLogger", minLevel: import.meta.env.VITE_LOG_LEVEL });
  
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
  
  const charactersList = ref<CharacterStats[]>([]);
  
  /** Помогает убрать превью, после нажатия "Оценки" */
  const appraiser_start = ref(false);
  
  /** Получает персонажей с сервера */
  async function get_hero() {
    try {
      const res = await axios.get(httpRoute.characters)
      logger.trace('Fetching character stats');
      charactersList.value = res.data;
    }
    catch (error) {
      logger.error(error);
    }
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
      
      /** Обнуляю main stat */
      const newTableSub = { ...char.artifact_profits.substats, [chosenArtifact.main_stat.value]: 0 };
      
      /** Пересобираю substats в массив, для удобной сортировки */
      let subList: number[] = [];
      
      for (let n in newTableSub) {
        subList.push(<number>newTableSub[n as keyof AllStats]);
      }
      
      /** Выбираю 4 наибольших substats */
      subList = subList.sort((a, b) => a - b).slice(-4);
      
      let A = subList.reduce((sum, number) => sumA(sum, number));
      A = A * 0.75;

      /** Нахожу вес лучшей основы */
      let weight: number = 0;
      let stats: AllStats = char.artifact_profits[chosen_art.value.slot as keyof ArtProfit];
      
      weight = Object.entries(stats).reduce((prev, curr) => prev[1] > curr[1] ? prev : curr)[1]
      
      /** Находим взешенный сабстаты */
      let weightSub: AllStats = { ...char.artifact_profits.substats }
      
      for (let subName in char.artifact_profits.substats) {
        weightSub[subName as keyof AllStats] = (((400 - weight) / A) * <number>char.artifact_profits.substats[subName as keyof AllStats])
      }
      
      
      /** Оценка артефактов по выбранным сабстатам */
      let sumWeightSub = 0;
      
      chosen_art.value.sub_stats.map((value) => {
        if (weightSub[value as keyof AllStats])
          sumWeightSub += weightSub[value as keyof AllStats] || 0;
        else
          sumWeightSub += 0
      });
      
      
      /** Сумма */
      let score: number = 0
      let main_stat_score = char.artifact_profits[chosen_art.value.slot as keyof ArtProfit][chosen_art.value.main_stat.value as keyof AllStats]
      
      if (main_stat_score)
        score = main_stat_score + sumWeightSub
      else
        score = sumWeightSub
      
      /** Проверка на элемент */
      if (Object.values(ElementsEnum).includes(chosen_art.value.main_stat.value as ElementsEnum)) {
        score = <number>char.artifact_profits.goblet.ELEM + sumWeightSub
      }
      
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
