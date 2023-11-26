import { ElementsEnum } from "@/scripts/enums/elements";

export interface Data {
  data: CharacterStats[];
}

export interface Stat {
  name: string,
  value: string;
}

export interface Artifact {
  name: string,
  stats: Stat[];
}


export interface CharacterStats {
  character_id: string,
  name: string,
  element: ElementsEnum,
  icon_url: string,
  artifact_profits: ArtProfit;
}

export interface ArtProfit {
  circlet: AllStats,
  flower: AllStats,
  goblet: AllStats,
  plume: AllStats,
  sands: AllStats,
  substats: AllStats;
}

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

export interface AllStats {
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
  ELEM?: number,
  HEAL?: number,
  PHYS?: number;
}

export interface Elements {
  [key: number]: string
}