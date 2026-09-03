import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { LockersService } from '../../../services/lockers';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        LockersService
    ],
    selector: 'app-lockers',
    styleUrl: './lockers.scss',
    templateUrl: './lockers.html',
    standalone: true
})
export class Lockers {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Ready for the Mountain',
        title: 'Lockers & Change Area',
        description: 'Get ready for your day and keep your gear close by with convenient chalet facilities right at the base of the mountain.',
        breadcrumbs: breadcrumbsFor('lockers')
    }));

    public readonly lockersService = inject(LockersService);
}
