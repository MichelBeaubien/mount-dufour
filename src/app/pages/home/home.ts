import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOUNTAIN_EXPERIENCES, MOUNTAIN_QUICK_LINKS, MOUNTAIN_STATS } from '../../config/tokens/mountain.tokens';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-home',
    styleUrl: './home.scss',
    templateUrl: './home.html',
    standalone: true
})
export class Home {
    public readonly mountainExperiences = inject(MOUNTAIN_EXPERIENCES);

    public readonly mountainStats = inject(MOUNTAIN_STATS);

    public readonly mountainQuickLinks = inject(MOUNTAIN_QUICK_LINKS);
}
