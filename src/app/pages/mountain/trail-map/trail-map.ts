import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-trail-map',
    styleUrl: './trail-map.scss',
    templateUrl: './trail-map.html',
    standalone: true
})
export class TrailMap {
    public readonly mountainService = inject(MountainService);
}
