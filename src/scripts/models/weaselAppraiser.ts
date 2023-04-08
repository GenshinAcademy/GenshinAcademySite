export interface Data {
  data: characterStats[];
}

export interface Stat {
  name: string,
  value: string;
}

export interface Artifact {
  name: string,
  stats: Stat[];
}

export interface characterStats {
  character_id: string,
  name: string,
  element: number,
  icon_url: string,
  stats_profit: ArtStat[];
}

// export interface StatsProfit {
//   [key: number]: Flower,
//
//   feather: Feather,
//   sands: Sands,
//   goblet: Goblet,
//   circlet: Circlet,
//   substats: ArtStat[];
// }

export interface ArtStat {
  slot: string,
  ATK?: number,
  ATK_P?: number,
  HP?: number,
  HP_P?: number,
  CD?: number,
  CR?: number,
  EM?: number,
  DEF?: number,
  DEF_P?: number,
  ER?: number,
  HEAL?: number,
  PHYS?: number,
  ELEM?: number;
}

export interface Flower {
  slot: string,
  HP: number;
}

export interface Feather {
  slot: string,
  ATK: number;
}

export interface Sands {
  slot: string,
  ATK_P?: number,
  HP_P?: number,
  DEF_P?: number,
  EM?: number,
  ER?: number;
}

export interface Goblet {
  slot: string,
  ATK_P?: number,
  HP_P?: number,
  DEF_P?: number,
  EM?: number,
  PHYS?: number,
  ELEM?: number;
}

export interface Circlet {
  slot: string,
  ATK_P?: number,
  DEF_P?: number,
  HP_P?: number,
  EM?: number,
  CR?: number,
  CD?: number,
  HEAL?: number;
}

export interface Substats {
  ATK?: number,
  ATK_P?: number,
  HP?: number,
  HP_P?: number,
  CD?: number,
  CR?: number,
  EM?: number,
  DEF?: number,
  DEF_P?: number,
  ER?: number;
}

export interface AllStats {
  ATK: number | null,
  ATK_P: number | null,
  HP: number | null,
  HP_P: number | null,
  CD: number | null,
  CR: number | null,
  EM: number | null,
  DEF: number | null,
  DEF_P: number | null,
  ER: number | null,
  HEAL: number | null,
  PHYS: number | null,
  ELEM: number | null;
}

export interface Elements {
  [key: number]: string
}