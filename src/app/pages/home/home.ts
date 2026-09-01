import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOUNTAIN_EXPERIENCES, MOUNTAIN_QUICK_LINKS } from '../../config/tokens/mountain.tokens';
import { getStatusLabel } from '../../config/utils';
import { HeroOptions } from '../../interfaces/hero';
import { PrimaryHero } from '../../partials/hero/primary-hero/primary-hero';
import { StatusMessage } from '../../partials/season/status-message/status-message';
import { MountainService } from '../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage,
        PrimaryHero
    ],
    selector: 'app-home',
    styleUrl: './home.scss',
    templateUrl: './home.html',
    standalone: true
})
export class Home {
    public readonly getStatusLabel = getStatusLabel;

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Elliot Lake, Ontario',
        kickerIcon: 'fa-location-dot',
        title: 'More mountain.',
        titleSpan: 'More skiing.',
        description: 'Ski, ride, learn and explore right in the heart of Elliot Lake.',
        image: '/assets/images/heros/home.jpg',
        scrollTo: {
            label: 'Scroll to mountain status',
            href: 'mountain-status'
        }
    }));

    public readonly mountainExperiences = inject(MOUNTAIN_EXPERIENCES);

    public readonly mountainQuickLinks = inject(MOUNTAIN_QUICK_LINKS);

    public readonly mountainService = inject(MountainService);
}
