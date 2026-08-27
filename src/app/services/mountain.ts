import { computed, Service, signal } from '@angular/core';
import { getStatusLabel } from '../config/utils';
import { MOUNTAIN_DATA } from '../data/mountain.data';
import { Lift, MountainStat, MountainStatus, MountainSummary, TerrainPark, Trail } from '../interfaces/mountain';

@Service()
export class MountainService {
    public readonly lifts = computed<Lift[]>(() => this.data().lifts);

    public readonly openLiftsCount = computed<number>(() => this.lifts().filter((lift) => lift.status === 'open').length);

    public readonly openTrailsCount = computed<number>(() => this.trails().filter((trail) => trail.status === 'open').length);

    public readonly snowmakingPercent = computed<number>(() => this.data().snowmakingPercent);

    public readonly stats = computed<MountainStat[]>(
        () => [
            {
                icon: 'fas fa-mountain',
                label: 'Trails',
                value: this.totalTrails().toString()
            },
            {
                icon: 'fas fa-cable-car',
                label: 'Lifts',
                value: this.totalLifts().toString()
            },
            {
                icon: 'fas fa-arrow-up',
                label: 'Vertical Feet',
                value: this.verticalFeet().toString()
            },
            {
                icon: 'fas fa-snowflake',
                label: 'Snowmaking',
                value: `${this.snowmakingPercent()}%`
            }
        ]
    );

    public readonly status = computed<MountainStatus>(() => this.data().status);

    public readonly summary = computed<MountainSummary[]>(
        () => [
            {
                icon: 'fas fa-mountain',
                label: 'Trails Open',
                value: `${this.openTrailsCount()} / ${this.totalTrails()}`
            },
            {
                icon: 'fas fa-cable-car',
                label: 'Lifts Open',
                value: `${this.openLiftsCount()} / ${this.totalLifts()}`
            },
            {
                icon: 'fas fa-person-snowboarding',
                label: 'Terrain Park',
                status: this.terrainPark().status,
                value: getStatusLabel(this.terrainPark().status)
            },
            {
                icon: 'fas fa-snowflake',
                label: 'Snowmaking',
                value: `${this.snowmakingPercent()}%`
            }
        ]
    );

    public readonly terrainPark = computed<TerrainPark>(() => this.data().terrainPark);

    public readonly totalLifts = computed<number>(() => this.lifts().length);

    public readonly totalTrails = computed<number>(() => this.trails().length);

    public readonly trails = computed<Trail[]>(() => this.data().trails);

    public readonly verticalFeet = computed<number>(() => this.data().verticalFeet);

    private readonly data = signal(MOUNTAIN_DATA);
}
