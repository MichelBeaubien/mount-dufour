import { Component, computed, inject } from '@angular/core';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        SecondaryHero
    ],
    selector: 'app-lift-tickets',
    styleUrl: './lift-tickets.scss',
    templateUrl: './lift-tickets.html',
    standalone: true
})
export class LiftTickets {
    public readonly mountainService = inject(MountainService);

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Tickets & Passes',
        title: 'Lift Tickets',
        description: 'Affordable skiing and snowboarding for the whole family, right here in Elliot Lake.',
        breadcrumbs: [
            {
                label: 'Home',
                route: '/'
            },
            {
                label: 'Tickets',
                route: '/tickets'
            },
            {
                label: 'Lift Tickets'
            }
        ]
    }));


}
