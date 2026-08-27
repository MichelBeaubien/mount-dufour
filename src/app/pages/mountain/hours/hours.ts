import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { getStatusClassName } from '../../../config/utils';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { HoursService } from '../../../services/hours';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink,
        StatusMessage
    ],
    selector: 'app-hours',
    styleUrl: './hours.scss',
    templateUrl: './hours.html',
    standalone: true
})
export class Hours {
    public readonly hoursService = inject(HoursService);

    public readonly mountainService = inject(MountainService);
    protected readonly getStatusClassName = getStatusClassName;
}
