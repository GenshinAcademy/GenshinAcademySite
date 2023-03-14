import { Artifact, Elements, Stat } from '@/scripts/models/ferretAppraiser';
import { defineStore } from "pinia";
import { ref } from "vue";

export const useListsStore = defineStore("lists", () => {
  
  const sandStats = ref<Stat[]>([
    {
      name: "Сила атаки %",
      value: "ATK_P",
    },
    {
      name: "Защита %",
      value: "DEF_P",
    },
    {
      name: "HP %",
      value: "HP_P",
    },
    {
      name: "Мастерство стихий",
      value: "EM",
    },
    {
      name: "Восстановление энергии",
      value: "ER",
    },
  ]);
  
  const gobletStats = ref<Stat[]>([
    {
      name: "Сила атаки %",
      value: "ATK_P",
    },
    {
      name: "Защита %",
      value: "DEF_P",
    },
    {
      name: "HP %",
      value: "HP_P",
    },
    {
      name: "Мастерство стихий",
      value: "EM",
    },
    {
      name: "Бонус физ. урона",
      value: "Phys",
    },
    {
      name: "Бонус Пиро урона",
      value: "Pyro",
    },
    {
      name: "Бонус Гидро урона",
      value: "Hydro",
    },
    {
      name: "Бонус Дендро урона",
      value: "Dendro",
    },
    {
      name: "Бонус Электро урона",
      value: "Electro",
    },
    {
      name: "Бонус Анемо урона",
      value: "Anemo",
    },
    {
      name: "Бонус Крио урона",
      value: "Cryo",
    },
    {
      name: "Бонус Гео урона",
      value: "Geo",
    },
  ]);
  
  const crownStats = ref<Stat[]>([
    { name: "Сила атаки %", value: "ATK_P" },
    { name: "Защита %", value: "DEF_P" },
    { name: "HP %", value: "HP_P", },
    { name: "Мастерство стихий", value: "EM" },
    { name: "Крит. шанс", value: "CR" },
    { name: "Крит. урон", value: "CD", },
    { name: "Бонус лечения", value: "HEAL" },
  ]);
  
  const subStats = ref<Stat[]>([
    { name: "Сила атаки", value: "ATK" },
    { name: "Сила атаки %", value: "ATK_P" },
    { name: "Защита", value: "DEF", },
    { name: "Защита %", value: "DEF_P" },
    { name: "HP", value: "HP" },
    { name: "HP %", value: "HP_P", },
    { name: "Мастерство стихий", value: "EM" },
    { name: "Восст. энергии", value: "ER" },
    { name: "Крит. шанс", value: "CR", },
    { name: "Крит. урон", value: "CD" },
  ]);
  
  const artifacts = ref<Artifact[]>([
    {
      name: "flower",
      stats: [
        {
          name: "HP",
          value: "HP",
        },
      ],
    },
    {
      name: "plume",
      stats: [
        {
          name: "Сила атаки",
          value: "ATK",
        },
      ],
    },
    {
      name: "sands",
      stats: sandStats.value,
    },
    {
      name: "goblet",
      stats: gobletStats.value,
    },
    {
      name: "circlet",
      stats: crownStats.value,
    },
  ]);
  
  const tiers = [['Идеально', 'S'], ['Отлично', 'A'], ['Хорошо', 'B'], ['Сойдёт', 'C']];
  
  const elements = ref<Elements[]>(['UndefinedElement', 'Pyro', 'Hydro', 'Geo', 'Anemo', 'Electro', 'Cryo', 'Dendro',])
  
  
  return { artifacts, subStats, tiers, elements };
});
