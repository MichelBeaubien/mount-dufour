export type MountainStatus = 'open' | 'closed' | 'hold';

export type TrailDifficulty = 'beginner' | 'intermediate' | 'advanced';

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

export interface MountainData {
    lifts: Lift[];
    snowmakingPercent: number;
    status: MountainStatus;
    terrainPark: TerrainPark;
    trails: Trail[];
    verticalFeet: number;
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
