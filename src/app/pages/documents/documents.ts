import { Component } from '@angular/core';
import { PageShell } from '../../partials/page-shell/page-shell';

@Component({
    imports: [PageShell],
    selector: 'app-documents',
    styleUrl: './documents.scss',
    templateUrl: './documents.html',
    standalone: true
})
export class Documents {
}
