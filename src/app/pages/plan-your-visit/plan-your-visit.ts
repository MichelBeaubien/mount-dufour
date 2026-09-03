import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../config/site-map';
import { HeroOptions } from '../../interfaces/hero';
import { PrimaryHero } from '../../partials/hero/primary-hero/primary-hero';
import { SectionTitle } from '../../partials/section-title/section-title';

@Component({
    imports: [
        PrimaryHero,
        RouterLink,
        SectionTitle
    ],
    selector: 'app-plan-your-visit',
    styleUrl: './plan-your-visit.scss',
    templateUrl: './plan-your-visit.html',
    standalone: true
})
export class PlanYourVisit {
    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Check the mountain, plan your day and find everything you need before heading to Mount Dufour.',
        image: '/assets/images/shared/heroes/kid-skiing-1.jpg',
        kicker: 'Before You Head Out',
        kickerIcon: 'fa-route',
        title: 'Plan less.',
        titleSpan: 'Ski more.',
        scrollTo: {
            href: 'before-you-go-intro',
            label: 'Explore before you go'
        }
    }));

    public readonly pages = SITE_PAGES;
}
