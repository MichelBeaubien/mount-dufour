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
    selector: 'app-lessons-rentals',
    styleUrl: './lessons-rentals.scss',
    templateUrl: './lessons-rentals.html',
    standalone: true
})
export class LessonsRentals {
    public readonly footerHero = computed<HeroOptions>(() => ({
        description: 'Get the gear, build your confidence and discover how much fun a day on the mountain can be.',
        image: '/assets/images/shared/heroes/about.jpg',
        kicker: 'Your Day Starts Here',
        kickerIcon: 'fa-person-skiing',
        title: 'Ready to get started?',
        titleSpan: 'We’ll help you get there.'
    }));

    public readonly hero = computed<HeroOptions>(() => ({
        description: 'From your first lesson to the equipment you need for the day, Mount Dufour makes getting on the snow easier.',
        image: '/assets/images/shared/heroes/lessons-rentals.jpg',
        kicker: 'Everything You Need to Ski',
        kickerIcon: 'fa-person-skiing',
        scrollTo: {
            href: 'lessons-rentals-options',
            label: 'Explore lessons and rentals'
        },
        title: 'Learn. Gear up.',
        titleSpan: 'Get out there.'
    }));

    public readonly pages = SITE_PAGES;
}
