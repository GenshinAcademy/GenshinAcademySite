import { characterStats, Substats, StatsProfit, Stat } from '@/scripts/models/ferretAppraiser';
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/HttpConfig.js";
import { Logger } from "tslog";

export const useCharacterStore = defineStore("character", () => {
    const logger = new Logger({ name: "characterLogger" });

    interface ChosenArtifact {
        slot: string,
        main_stat: Stat,
        sub_stats: string[];
    }

    const default_art: ChosenArtifact = {
        slot: "flower",
        main_stat: {
            name: 'HP',
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

    // interface Dictionary<T> {
    //     [Key: string]: T,
    // }

    const sortedCharactersStats = ref<CharacterResult[][]>([]);

    const charactersStats = ref<characterStats[]>([]);

    /** Помогает убрать превью, после нажатия "Оценки" */
    const appraiser_start = ref(false);

    /** Получает персонажей с сервера */
    function get_hero() {
        axios
            .get("/characters/stats")
            .then((res) => {
                logger.trace('Fetching character stats');
                charactersStats.value = res.data.data;
            })
            .catch((error) => {
                logger.error(error.message);
            });

        // heroes.value = test_data.data
    }

    /** Очищает все характеристики артефакта пользователя */
    function art_clear() {
        chosen_art.value = default_art;
    }

    interface Tier {
        name: string,
        value: number;
    }

    const tiers: Tier[] = [
        {
            name: 'Best',
            value: 400
        },
        {
            name: 'Good',
            value: 370
        },
        {
            name: 'Best',
            value: 340
        },
        {
            name: 'Best',
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

        charactersStats.value.filter((charStats) => {
            /** Обнуляю main stat */
            const newTableSub = { ...charStats.statsProfit.substats };

            newTableSub[chosenArtifact.main_stat.value as keyof Substats] = 0;
            /** Пересобираю substats в массив, для удобной сортировки */
            let subList: number[] = [];

            logger.info(charStats);
            for (let n in charStats.statsProfit.substats) {
                subList.push(charStats.statsProfit.substats[n as keyof Substats]);
            }

            /** Выбираю 4 наибольших substats */
            subList = subList.sort((a, b) => a - b).slice(-4);
            let A = subList.reduce((sum, number) => sum + number);
            A = A * 0.75;
            /** Нахожу вес лучшей основы */
            let weight: number[] = [];
            let stats = charStats.statsProfit[chosen_art.value.slot as keyof StatsProfit];
            for (let statName in stats) {
                // @ts-ignore    
                weight.push(stats[statName]);
            }
            weight = weight.sort((a, b) => a - b).slice(-1);
            /** Находим взешенный сабстаты */
            let weightSub = {};
            for (let i in charStats.statsProfit.substats) {
                weightSub = {
                    ...weightSub,
                    [i]: (((400 - weight[0]) / A) * charStats.statsProfit.substats[i as keyof Substats])
                };
            }

            /** Оценка артефактов по выбранным сабстатам */
            let sumWeightSub = 0;
            chosen_art.value.sub_stats.map((value, index) => {
                // @ts-ignore
                sumWeightSub += weightSub[value];
            });
            /** Сумма */
            // @ts-ignore
            let score = stats[chosen_art.value.main_stat.value] + sumWeightSub;
            /** Проверка на элемент */
            if (charStats.element === chosen_art.value.main_stat.value)
                // @ts-ignore
                score = stats['ELEM'] + sumWeightSub;
            let i = {
                id: charStats.id,
                name: charStats.name,
                icon_url: charStats.icon_url,
                stats_profit: score,
            };
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
         * if Исключает всех героев у кого баллов меньше 300,
         * хороший вариант, чтобы не перегружать интерфейс
         */
        for (let i = 0; i < tiers.length; i++) {
            if (character.stats_profit >= Number(tiers[i])) {
                sortedCharactersStats.value[i].push(character);
                break;
            }
        }

        /** Убирает превью */
        appraiser_start.value = true;
    }

    return { chosen_art, sortedCharactersStats, appraiser_start, get_hero, art_clear, ferret };
});
