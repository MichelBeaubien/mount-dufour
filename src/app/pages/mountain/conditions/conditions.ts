import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getStatusClassName, getStatusLabel } from '../../../config/utils';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage
    ],
    selector: 'app-conditions',
    styleUrl: './conditions.scss',
    templateUrl: './conditions.html',
    standalone: true
})
export class Conditions {
    public readonly getStatusLabel = getStatusLabel;

    public readonly getStatusClassName = getStatusClassName;

    public readonly mountainService = inject(MountainService);
}
