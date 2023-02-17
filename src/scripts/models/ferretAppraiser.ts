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
    id: number,
    name: string,
    element: string,
    icon_url: string,
    statsProfit: StatsProfit;
}

export interface StatsProfit {
    flower: Flower,
    feather: Feather,
    sands: Sands,
    goblet: Goblet,
    circlet: Circlet,
    substats: Substats;
}

export interface Flower {
    HP: number;
}

export interface Feather {
    ATK: number;
}

export interface Sands {
    ATK_P: number,
    HP_P: number,
    DEF_P: number,
    EM: number,
    ER: number;
}

export interface Goblet {
    ATK_P: number,
    HP_P: number,
    DEF_P: number,
    EM: number,
    PHYS: number,
    ELEM: number;
}

export interface Circlet {
    ATK_P: number,
    DEF_P: number,
    HP_P: number,
    EM: number,
    CR: number,
    CD: number,
    HEAL: number;
}

export interface Substats {
    ATK: number,
    ATK_P: number,
    HP: number,
    HP_P: number,
    CD: number,
    CR: number,
    EM: number,
    DEF: number,
    DEF_P: number,
    ER: number;
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
