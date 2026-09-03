import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../config/site-map';
import { HeroOptions } from '../../interfaces/hero';
import { SecondaryHero } from '../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../partials/section-title/section-title';

@Component({
    imports: [
        SecondaryHero,
        RouterLink,
        SectionTitle
    ],
    selector: 'app-safety',
    styleUrl: './safety.scss',
    templateUrl: './safety.html',
    standalone: true
})
export class Safety {
    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Know the rules, understand your responsibility and help keep every day at Mount Dufour a safe one.',
        kicker: 'Know Before You Go',
        title: 'Mountain Safety'
    }));

    public readonly pages = SITE_PAGES;
}
