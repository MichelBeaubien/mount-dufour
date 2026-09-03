import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../../config/site-map';
import { numberToWord } from '../../../config/utils';
import { HeroOptions } from '../../../interfaces/hero';
import { PrimaryHero } from '../../../partials/hero/primary-hero/primary-hero';
import { MountainStatsRow } from '../../../partials/mountain-stats-row/mountain-stats-row';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        PrimaryHero,
        RouterLink,
        TitleCasePipe,
        SectionTitle,
        MountainStatsRow
    ],
    selector: 'app-mountain',
    styleUrl: './mountain.scss',
    templateUrl: './mountain.html',
    standalone: true
})
export class Mountain {
    public readonly footerHero = computed<HeroOptions>(() => ({
        description: 'Your local mountain is closer than you think. Check the conditions and make your next day at Mount Dufour happen.',
        image: '/assets/images/heros/kid-skiing-1.jpg',
        kicker: 'Right Here in Elliot Lake',
        title: 'More time skiing.',
        titleSpan: 'Less time waiting.'
    }));

    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Explore the trails, check mountain conditions and get everything you need for your next day at Mount Dufour.',
        image: '/assets/images/heros/mountain.jpg',
        kicker: 'Your Mountain Awaits',
        kickerIcon: 'fa-mountain',
        scrollTo: {
            href: 'mountain-overview',
            label: 'Explore Mount Dufour'
        },
        title: 'Find your run.',
        titleSpan: 'Make it yours.'
    }));

    public readonly mountainService = inject(MountainService);

    public readonly numberToWord = numberToWord;

    public readonly pages = SITE_PAGES;
}
