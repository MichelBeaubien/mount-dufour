import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getStatusLabel } from '../../../config/utils';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-conditions',
    styleUrl: './conditions.scss',
    templateUrl: './conditions.html',
    standalone: true
})
export class Conditions {
    public readonly getStatusLabel = getStatusLabel;

    public readonly mountainService = inject(MountainService);
}
