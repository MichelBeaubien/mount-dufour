import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOUNTAIN_STATS, MOUNTAIN_TRAILS } from '../../../config/tokens/mountain.tokens';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-trail-map',
    styleUrl: './trail-map.scss',
    templateUrl: './trail-map.html',
    standalone: true
})
export class TrailMap {
    public readonly mountainStats = inject(MOUNTAIN_STATS);

    public readonly mountainTrails = inject(MOUNTAIN_TRAILS);
}
