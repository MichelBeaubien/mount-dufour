import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { SnowSchoolService } from '../../../services/snow-school';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        SnowSchoolService
    ],
    selector: 'app-snow-school',
    styleUrl: './snow-school.scss',
    templateUrl: './snow-school.html',
    standalone: true
})
export class SnowSchool {
    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Lessons & Rentals',
        title: 'Snow School',
        description: 'Build confidence, learn new skills and enjoy more of the mountain with personalized ski and snowboard instruction.',
        breadcrumbs: breadcrumbsFor('snowSchool')
    }));

    public readonly snowSchoolService = inject(SnowSchoolService);
}
