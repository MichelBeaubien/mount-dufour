import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { RentalsService } from '../../../services/rentals';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        RentalsService
    ],
    selector: 'app-rentals',
    styleUrl: './rentals.scss',
    templateUrl: './rentals.html',
    standalone: true
})
export class Rentals {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Lessons & Rentals',
        title: 'Equipment Rentals',
        description: 'Everything you need to get on the mountain, with ski and snowboard rentals available right at the chalet.',
        breadcrumbs: breadcrumbsFor('rentals')
    }));

    public readonly rentalsService = inject(RentalsService);
}
