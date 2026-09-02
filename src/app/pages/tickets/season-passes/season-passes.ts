import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { SeasonPassesService } from '../../../services/season-passes';

@Component({
    imports: [
        SectionTitle,
        SecondaryHero
    ],
    providers: [
        SeasonPassesService
    ],
    selector: 'app-season-passes',
    styleUrl: './season-passes.scss',
    templateUrl: './season-passes.html',
    standalone: true
})
export class SeasonPasses {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Tickets & Passes',
        title: 'Season Passes',
        description: 'Enjoy the freedom to ski and ride Mount Dufour all season long.',
        breadcrumbs: breadcrumbsFor('seasonPasses')
    }));

    public readonly seasonPassesService = inject(SeasonPassesService);
}
