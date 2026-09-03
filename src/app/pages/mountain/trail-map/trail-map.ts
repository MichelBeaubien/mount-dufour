import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { numberToWord } from '../../../config/utils';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { MountainStatsRow } from '../../../partials/mountain-stats-row/mountain-stats-row';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { MountainService } from '../../../services/mountain';
import { breadcrumbsFor, SITE_PAGES } from '../../../config/site-map';

@Component({
    imports: [
        RouterLink,
        StatusMessage,
        SecondaryHero,
        SectionTitle,
        TitleCasePipe,
        MountainStatsRow
    ],
    providers: [
        MountainService
    ],
    selector: 'app-trail-map',
    styleUrl: './trail-map.scss',
    templateUrl: './trail-map.html',
    standalone: true
})
export class TrailMap {
    public readonly pages = SITE_PAGES;

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Explore the Mountain',
        title: 'Trail Map',
        description: `${numberToWord(this.mountainService.totalTrails())} trails, ${numberToWord(this.mountainService.totalLifts())} lifts and terrain for every kind of day on the mountain.`,
        breadcrumbs: breadcrumbsFor('trailMap')
    }));

    public readonly mountainService = inject(MountainService);

    public readonly numberToWord = numberToWord;
}
