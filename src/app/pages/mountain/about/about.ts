import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { AboutService } from '../../../services/about';
import { MountainService } from '../../../services/mountain';
import { breadcrumbsFor, SITE_PAGES } from '../../../config/site-map';

@Component({
    imports: [
        RouterLink,
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        AboutService,
        MountainService
    ],
    selector: 'app-about',
    styleUrl: './about.scss',
    templateUrl: './about.html',
    standalone: true
})
export class About {
    public readonly pages = SITE_PAGES;

    public readonly aboutService = inject(AboutService);

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Our Mountain',
        title: 'Built for Winter.',
        description: 'A true Northern Ontario ski hill, right in the heart of Elliot Lake.',
        breadcrumbs: breadcrumbsFor('about')
    }))

    public readonly mountainService = inject(MountainService);
}
