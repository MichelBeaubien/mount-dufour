import { Component, input } from '@angular/core';
import { getStatusClassName } from '../../../config/utils';
import { MountainStatus } from '../../../interfaces/mountain';

@Component({
    selector: 'app-status-icon',
    styleUrl: './status-icon.scss',
    templateUrl: './status-icon.html',
    standalone: true
})
export class StatusIcon {
    public readonly getStatusClassName = getStatusClassName;

    public readonly icon = input<string>('fa-circle');

    public readonly status = input.required<MountainStatus>();
}
