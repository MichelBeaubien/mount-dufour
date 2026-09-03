import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { breadcrumbsFor, SITE_PAGES } from '../../config/site-map';
import { HeroOptions } from '../../interfaces/hero';
import { SecondaryHero } from '../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../partials/section-title/section-title';

@Component({
    imports: [
        SecondaryHero,
        RouterLink,
        SectionTitle
    ],
    selector: 'app-contact',
    styleUrl: './contact.scss',
    templateUrl: './contact.html',
    standalone: true
})
export class Contact {
    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Have a question about the mountain, your visit or an upcoming day on the slopes? Let us know and we\'ll help.',
        kicker: 'Questions?',
        title: 'Get in Touch',
        titleSpan: 'Let’s talk.'
    }));

    public readonly pages = SITE_PAGES;
}
