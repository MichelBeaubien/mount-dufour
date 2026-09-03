import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { LoungeService } from '../../../services/lounge';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        LoungeService
    ],
    selector: 'app-lounge',
    styleUrl: './lounge.scss',
    templateUrl: './lounge.html',
    standalone: true
})
export class Lounge {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Warmup & Unwind',
        title: 'Slopeside Lounge',
        description: 'Warm up and unwind in Mount Dufour’s fully licensed fireside lounge.',
        breadcrumbs: breadcrumbsFor('lounge')
    }));

    public readonly loungeService = inject(LoungeService);
}
