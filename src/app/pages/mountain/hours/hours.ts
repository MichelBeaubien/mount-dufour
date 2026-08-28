import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { HoursService } from '../../../services/hours';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage,
        SecondaryHero
    ],
    selector: 'app-hours',
    styleUrl: './hours.scss',
    templateUrl: './hours.html',
    standalone: true
})
export class Hours {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Plan Your Day',
        title: 'Hours of Operation',
        description: 'Check Mount Dufour\'s operating schedule before heading to the hill.',
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
                label: 'Hours'
            }
        ]
    }));

    public readonly hoursService = inject(HoursService);

    public readonly mountainService = inject(MountainService);
}
