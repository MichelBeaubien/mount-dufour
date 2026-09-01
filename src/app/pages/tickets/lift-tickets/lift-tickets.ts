import { Component, computed, inject } from '@angular/core';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { LiftTicketsService } from '../../../services/lift-tickets';
import { breadcrumbsFor } from '../../../config/site-map';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    selector: 'app-lift-tickets',
    styleUrl: './lift-tickets.scss',
    templateUrl: './lift-tickets.html',
    standalone: true,
    providers: [
        LiftTicketsService,
    ]
})
export class LiftTickets {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Tickets & Passes',
        title: 'Lift Tickets',
        description: 'Affordable skiing and snowboarding for the whole family, right here in Elliot Lake.',
        breadcrumbs: breadcrumbsFor('liftTickets')
    }));

    public readonly liftTicketsService = inject(LiftTicketsService);
}
