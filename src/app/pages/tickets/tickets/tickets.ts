import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { PrimaryHero } from '../../../partials/hero/primary-hero/primary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';

@Component({
    imports: [
        PrimaryHero,
        RouterLink,
        SectionTitle
    ],
    selector: 'app-tickets',
    styleUrl: './tickets.scss',
    templateUrl: './tickets.html',
    standalone: true
})
export class Tickets {
    public readonly footerHero = computed<HeroOptions>(() => ({
        description: 'From a single day on the slopes to a full season at Mount Dufour, find the option that works for you.',
        image: '/assets/images/heros/mountain.jpg',
        kicker: 'Your Mountain. Your Winter.',
        kickerIcon: 'fa-snowflake',
        title: 'Ready to ski?',
        titleSpan: 'We’ll see you out there.'
    }));

    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Choose the way you want to ski Mount Dufour, from a day on the slopes to a full season on your local mountain.',
        image: '/assets/images/heros/about.jpg',
        kicker: 'Your Ticket to Winter',
        kickerIcon: 'fa-ticket',
        scrollTo: {
            href: 'ticket-options',
            label: 'Explore ticket options'
        },
        title: 'More skiing.',
        titleSpan: 'Your way.'
    }));

    public readonly pages = SITE_PAGES;
}
