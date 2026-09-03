import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { PrimaryHero } from '../../../partials/hero/primary-hero/primary-hero';

@Component({
    imports: [
        PrimaryHero,
        RouterLink
    ],
    selector: 'app-chalet',
    styleUrl: './chalet.scss',
    templateUrl: './chalet.html',
    standalone: true
})
export class Chalet {
    public readonly footerHero = computed<HeroOptions>(() => ({
        description: 'Warm up, grab something to eat and settle in before your next run.',
        image: '/assets/images/shared/heroes/about.jpg',
        kicker: 'Your Mountain Base',
        kickerIcon: 'fa-house',
        title: 'Come in from the cold.',
        titleSpan: 'Stay for a while.'
    }));

    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Warm up, refuel and relax at the heart of Mount Dufour.',
        image: '/assets/images/tickets/value/group-shot-red-coat.jpg',
        kicker: 'At the Base of the Mountain',
        kickerIcon: 'fa-house',
        scrollTo: {
            href: 'chalet-intro',
            label: 'Explore the chalet'
        },
        title: 'Your place',
        titleSpan: 'between runs.'
    }));

    public readonly pages = SITE_PAGES;
}
