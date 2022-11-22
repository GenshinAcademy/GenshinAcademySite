import {defineStore} from 'pinia';
import {ref} from 'vue';


export const useListsStore = defineStore('lists', () => {

  const sand = ref([{
    name: 'Сила атака %', value: 'ATK_P'
  }, {
    name: 'Защита %', value: 'DEF_P'
  }, {
    name: 'HP %', value: 'HP_P'
  }, {
    name: 'Мастерство стихий', value: 'EM'
  }, {
    name: 'Восстановление энергии', value: 'ER'
  }])

  const goblet = ref([{
    name: 'Сила атака %', value: 'ATK_P'
  }, {
    name: 'Защита %', value: 'DEF_P'
  }, {
    name: 'HP %', value: 'HP_P'
  }, {
    name: 'Мастерство стихий', value: 'EM'
  }, {
    name: 'Бонус физ. урона', value: 'PHYS'
  }, {
    name: 'Бонус Пиро урона', value: 'PYRO'
  }, {
    name: 'Бонус Гидро урона', value: 'HYDRO'
  }, {
    name: 'Бонус Дендро урона', value: 'DENDRO'
  }, {
    name: 'Бонус Электро урона', value: 'ELECTRO'
  }, {
    name: 'Бонус Анемо урона', value: 'ANEMO'
  }, {
    name: 'Бонус Крио урона', value: 'CRYO'
  }, {
    name: 'Бонус Гео урона', value: 'GEO'
  }])

  const crown = ref([{name: 'Сила атака %', value: 'ATK_P'}, {name: 'Защита %', value: 'DEF_P'}, {
    name: 'HP %', value: 'HP_P'
  }, {name: 'Мастерство стихий', value: 'EM'}, {name: 'Крит. шанс', value: 'CR'}, {
    name: 'Крит. урон', value: 'CD'
  }, {name: 'Бонус лечения', value: 'HEAL'}])


  const sub = ref([{name: 'Сила атака', value: 'ATK'}, {name: 'Сила атака %', value: 'ATK_P'}, {
    name: 'Защита', value: 'DEF'
  }, {name: 'Защита %', value: 'DEF_P'}, {name: 'HP', value: 'HP'}, {
    name: 'HP %', value: 'HP_P'
  }, {name: 'Мастерство стихий', value: 'EM'}, {name: 'Восстановление энергии', value: 'ER'}, {
    name: 'Крит. шанс', value: 'CR'
  }, {name: 'Крит. урон', value: 'CD'}])

  const art = ref([{
    name: 'flower', stat: [{
      name: 'HP',
      value: 'HP'
    }]
  }, {
    name: 'feather', stat: [{
      name: 'Сила Атаки',
      value: 'ATK'
    }]
  }, {
    name: 'sand', stat: sand
  }, {
    name: 'goblet', stat: goblet
  }, {
    name: 'crown', stat: crown
  }])

  return {art, sub};
});
