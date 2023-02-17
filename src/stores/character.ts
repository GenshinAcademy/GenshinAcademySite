import { characterStats, Stat, StatsProfit, Substats } from '@/scripts/models/ferretAppraiser';
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/HttpConfig.js";
import { Logger } from "tslog";

export const useCharacterStore = defineStore("character", () => {
  const logger = new Logger({ name: "characterLogger" });
  
  interface ChosenArtifact {
    slot: keyof StatsProfit,
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
    id: number,
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
      .get("/characters/stats")
      .then((res) => {
        logger.trace('Fetching character stats');
        charactersList.value = res.data.data;
      })
      .catch((error) => {
        logger.error(error.message);
      });
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
  
  /**
   * Считает баллы персонажа и отправляет их в сортировку
   *
   * @param {Object} chosenArtifact - Артефакты пользователя
   */
  function ferret(chosenArtifact: ChosenArtifact) {
    sort_default();
    
    charactersList.value.filter((char) => {
      /** Обнуляю main stat */
      const newTableSub = { ...char.statsProfit.substats };
      newTableSub[chosenArtifact.main_stat.value as keyof Substats] = 0;
      
      /** Пересобираю substats в массив, для удобной сортировки */
      let subList: number[] = [];
      
      for (let n in newTableSub) {
        subList.push(newTableSub[n as keyof Substats]);
      }
      
      /** Выбираю 4 наибольших substats */
      subList = subList.sort((a, b) => a - b).slice(-4);
      let A = subList.reduce((sum, number) => sum + number);
      A = A * 0.75;
      
      
      /** Нахожу вес лучшей основы */
      let weight: number;
      let stats = char.statsProfit[chosen_art.value.slot];
      
      weight = Object.entries(stats).reduce((prev, curr) => prev[1] > curr[1] ? prev : curr)[1]
      
      
      /** Находим взешенный сабстаты */
      let weightSub: Substats = { ...char.statsProfit.substats }
      let subName: keyof Substats
      
      for (subName in char.statsProfit.substats) {
        weightSub[subName] = (((400 - weight) / A) * char.statsProfit.substats[subName])
      }
      
      /** Оценка артефактов по выбранным сабстатам */
      let sumWeightSub = 0;
      chosen_art.value.sub_stats.map((value) => {
        sumWeightSub += weightSub[value as keyof Substats];
      });
      
      /** Сумма */
        //@ts-ignore
      let score = stats[chosen_art.value.main_stat.value] + sumWeightSub;
      
      /** Проверка на элемент */
      if (char.element === chosen_art.value.main_stat.value) {
        // @ts-ignore
        score = stats['ELEM'] + sumWeightSub;
      }
      
      let i = {
        id: char.id,
        name: char.name,
        icon_url: char.icon_url,
        stats_profit: score,
      };
      
      logger.debug({
        id: char.id,
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
  
  return { chosen_art, sortedCharactersStats, appraiser_start, get_hero, art_clear, ferret };
});
