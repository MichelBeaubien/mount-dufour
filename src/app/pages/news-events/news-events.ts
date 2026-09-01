import { Component } from '@angular/core';
import { PageShell } from '../../partials/page-shell/page-shell';

@Component({
    imports: [PageShell],
    selector: 'app-news-events',
    styleUrl: './news-events.scss',
    templateUrl: './news-events.html',
    standalone: true
})
export class NewsEvents {
}
