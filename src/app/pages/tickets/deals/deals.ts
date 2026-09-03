import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { TicketDealsService } from '../../../services/ticket-deals';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        TicketDealsService
    ],
    selector: 'app-deals',
    styleUrl: './deals.scss',
    templateUrl: './deals.html',
    standalone: true
})
export class Deals {
    public readonly ticketDealsService = inject(TicketDealsService);

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Save on the Slopes',
        title: 'Deals & Specials',
        description: 'Seasonal savings, special offers and more ways to enjoy winter at Mount Dufour.',
        breadcrumbs: breadcrumbsFor('deals')
    }));
}
