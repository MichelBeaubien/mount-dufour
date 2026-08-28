import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { numberToWord } from '../../../config/utils';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage,
        SecondaryHero
    ],
    selector: 'app-trail-map',
    styleUrl: './trail-map.scss',
    templateUrl: './trail-map.html',
    standalone: true
})
export class TrailMap {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Explore the Mountain',
        title: 'Trail Map',
        description: `${numberToWord(this.mountainService.totalTrails())} trails, ${numberToWord(this.mountainService.totalLifts())} lifts and terrain for every kind of day on the mountain.`,
        breadcrumbs: [
            {
                label: 'Home',
                route: '/'
            },
            {
                label: 'Mountain',
                route: '/mountain'
            },
            {
                label: 'Trail Map'
            }
        ]
    }));

    public readonly mountainService = inject(MountainService);
}
