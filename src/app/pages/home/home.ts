import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MOUNTAIN_EXPERIENCES, MOUNTAIN_QUICK_LINKS } from '../../config/tokens/mountain.tokens';
import { getStatusClassName } from '../../config/utils';
import { StatusMessage } from '../../partials/season/status-message/status-message';
import { MountainService } from '../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage
    ],
    selector: 'app-home',
    styleUrl: './home.scss',
    templateUrl: './home.html',
    standalone: true
})
export class Home {
    public readonly getStatusClassName = getStatusClassName;

    public readonly mountainExperiences = inject(MOUNTAIN_EXPERIENCES);

    public readonly mountainQuickLinks = inject(MOUNTAIN_QUICK_LINKS);

    public readonly mountainService = inject(MountainService);
}
