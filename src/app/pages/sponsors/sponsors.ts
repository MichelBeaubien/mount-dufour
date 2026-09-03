import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../config/site-map';
import { HeroOptions } from '../../interfaces/hero';
import { SecondaryHero } from '../../partials/hero/secondary-hero/secondary-hero';
import { SponsorsService } from '../../services/sponsors';

@Component({
    imports: [
        SecondaryHero,
        RouterLink
    ],
    providers: [
        SponsorsService
    ],
    selector: 'app-sponsors',
    styleUrl: './sponsors.scss',
    templateUrl: './sponsors.html',
    standalone: true
})
export class Sponsors {
    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Mount Dufour is proudly supported by businesses, organizations and people who help make our mountain possible.',
        kicker: 'Community Support',
        title: 'Our Sponsors'
    }));

    public readonly pages = SITE_PAGES;

    public readonly sponsorsService = inject(SponsorsService);
}
