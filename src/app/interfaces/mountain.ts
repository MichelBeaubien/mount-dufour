export type MountainStatus = 'open' | 'closed' | 'hold' | 'opening-soon';

export type StatusMessageTheme = 'light' | 'dark';

export type TrailDifficulty = 'beginner' | 'intermediate' | 'advanced';

export interface AboutFeature {
    description: string;
    icon: string;
    title: string;
}

export interface Experience {
    description: string;
    icon: string;
    label: string;
    path: string;
    title: string;
}

export interface Lift {
    name: string;
    status: MountainStatus;
    type: string;
}

export interface LiftTicketsPrice {
    ageRange?: string;
    fullDay: number;
    halfDay: number;
    label: string;
}

export interface MountainData {
    lifts: Lift[];
    season: MountainSeason;
    snowmakingPercent: number;
    status: MountainStatus;
    terrainPark: TerrainPark;
    trails: Trail[];
    verticalFeet: number;
}

export interface MountainSeason {
    message: string;
    status: MountainStatus;
}

export interface MountainStat {
    icon: string;
    label: string;
    value: string;
}

export interface MountainSummary {
    icon: string;
    label: string;
    status?: MountainStatus;
    value: string;
}

export interface QuickLink {
    description: string;
    icon: string;
    label: string;
    path: string;
}

export interface TerrainPark {
    status: MountainStatus;
}

export interface Trail {
    difficulty: TrailDifficulty;
    groomed: boolean;
    name: string;
    status: MountainStatus;
}
