import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
    MOUNTAIN_LIFTS,
    MOUNTAIN_STATUS,
    MOUNTAIN_SUMMARY,
    MOUNTAIN_TRAILS
} from '../../../config/tokens/mountain.tokens';
import { getStatusLabel } from '../../../config/utils';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-conditions',
    styleUrl: './conditions.scss',
    templateUrl: './conditions.html',
    standalone: true
})
export class Conditions {
    public readonly getStatusLabel = getStatusLabel;

    public readonly mountainLifts = inject(MOUNTAIN_LIFTS);

    public readonly mountainStatus = inject(MOUNTAIN_STATUS);

    public readonly mountainSummary = inject(MOUNTAIN_SUMMARY);

    public readonly mountainTrails = inject(MOUNTAIN_TRAILS);
}
