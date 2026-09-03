import { Component, input } from '@angular/core';
import { MountainStat } from '../../interfaces/mountain';

@Component({
    imports: [],
    selector: 'app-mountain-stats-row',
    styleUrl: './mountain-stats-row.scss',
    templateUrl: './mountain-stats-row.html',
    standalone: true
})
export class MountainStatsRow {
    public readonly stats = input.required<MountainStat[]>();
}
