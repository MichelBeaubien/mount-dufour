import { Component, input } from '@angular/core';
import { MountainStatus, StatusMessageTheme } from '../../../interfaces/mountain';
import { StatusIcon } from '../status-icon/status-icon';

@Component({
    imports: [
        StatusIcon
    ],
    selector: 'app-status-message',
    styleUrl: './status-message.scss',
    templateUrl: './status-message.html',
    standalone: true
})
export class StatusMessage {
    public readonly icon = input<string>('fa-circle');

    public readonly message = input.required<string>();

    public readonly showTitle = input<boolean>(false);

    public readonly status = input.required<MountainStatus>();

    public readonly theme = input<StatusMessageTheme>('light');

    public readonly title = input<string>('Season Status');
}
