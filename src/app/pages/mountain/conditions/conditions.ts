import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getStatusLabel } from '../../../config/utils';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { MountainService } from '../../../services/mountain';
import { breadcrumbsFor, SITE_PAGES } from '../../../config/site-map';

@Component({
    imports: [
        RouterLink,
        StatusMessage,
        SecondaryHero,
        SectionTitle
    ],
    selector: 'app-conditions',
    styleUrl: './conditions.scss',
    templateUrl: './conditions.html',
    standalone: true
})
export class Conditions {
    public readonly pages = SITE_PAGES;

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Mountain Report',
        title: 'Mountain Conditions',
        description: 'Check current trail, lift and terrain park conditions before heading to the hill.',
        breadcrumbs: breadcrumbsFor('conditions')
    }));

    public readonly getStatusLabel = getStatusLabel;

    public readonly mountainService = inject(MountainService);
}
