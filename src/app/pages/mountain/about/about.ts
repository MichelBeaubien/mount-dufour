import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutService } from '../../../services/about';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-about',
    styleUrl: './about.scss',
    templateUrl: './about.html',
    standalone: true
})
export class About {
    public readonly aboutService = inject(AboutService);

    public readonly mountainService = inject(MountainService);
}
