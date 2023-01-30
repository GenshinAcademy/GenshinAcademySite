import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "@/HttpConfig.js";
import { Logger } from "tslog";

export const useCharacterStore = defineStore("character", () => {
    const logger = new Logger('characterLogger');

    const user_art = ref({
        art: "",
        main: {},
        sub_stats: [],
    });

    const default_art = ref({
        art: "flower",
        main: {
            name: 'HP',
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

    /** Помогает убрать превью, после нажатия "Оценки" */
    const appraiser_start = ref(false);

    /** Проверяет есть ли сохраненные артефакты пользователя */
    function is_user_art() {
        if (!user_art.value.main.hasOwnProperty("name")) {
            user_art.value = default_art.value;
        }
    }

    /** Получает персонажей с сервера */
    function get_hero() {

        axios
            .get("/characters/stats")
            .then((res) => {
                logger.trace('Fetching character stats');
                heroes.value = res.data.data;
            })
            .catch((error) => {
                logger.error(error.message);
            });

        // heroes.value = test_data.data
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

            /** Обнуляю main stat */
            const newTableSub = { ...h.statsProfit.substats };
            newTableSub[user.main.value] = 0;

            /** Пересобираю substats в массив, для удобной сортировки */
            let subList = [];
            for (let n in h.statsProfit.substats) {
                subList.push(h.statsProfit.substats[n]);
            }

            /** Выбираю 4 наибольших substats */
            subList = subList.sort((a, b) => a - b).slice(-4);
            let A = subList.reduce((sum, number) => sum + number);
            A = A * 0.75;

            /** Нахожу вес лучшей основы */
            let weight = [];
            for (let n in h.statsProfit[user_art.value.art]) {
                weight.push(h.statsProfit[user_art.value.art][n]);
            }

            weight = weight.sort((a, b) => a - b).slice(-1)[0];

            /** Находим взешенный сабстаты */
            let weightSub = {};
            for (let i in h.statsProfit.substats) {
                weightSub = {
                    ...weightSub,
                    [i]: (((400 - weight) / A) * h.statsProfit.substats[i])
                };
            }


            /** Оценка артефакто по выбранным сабстатам */
            let sumWeightSub = 0;
            user_art.value.sub_stats.map((value, index) => {
                sumWeightSub += weightSub[value];
            });

            /** Сумма */
            let score = h.statsProfit[user_art.value.art][user_art.value.main.value] + sumWeightSub;

            /** Проверка на элемент */
            if (h.element === user_art.value.main.value)
                score = h.statsProfit[user_art.value.art]['ELEM'] + sumWeightSub;

            let i = {
                id: h.id,
                name: h.name,
                icon_url: h.icon_url,
                stats_profit: score,
            };

            logger.debug({
                id: h.id,
                name: h.name,
                weight: weight,
                weightSub: weightSub,
                stats_profit: score,
            });

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

        /** Убирает превью */
        appraiser_start.value = true;
    }

    return { user_art, sort, appraiser_start, get_hero, art_clear, ferret, is_user_art };
});
