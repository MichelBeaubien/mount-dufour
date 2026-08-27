import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StatusMessage } from '../../../partials/season/status-message/status-message';
import { NumberWordPipe } from '../../../pipes/number-word-pipe';
import { MountainService } from '../../../services/mountain';

@Component({
    imports: [
        RouterLink,
        NumberWordPipe,
        TitleCasePipe,
        StatusMessage
    ],
    selector: 'app-trail-map',
    styleUrl: './trail-map.scss',
    templateUrl: './trail-map.html',
    standalone: true
})
export class TrailMap {
    public readonly mountainService = inject(MountainService);
}
