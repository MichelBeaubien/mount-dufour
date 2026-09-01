import { Component } from '@angular/core';
import { PageShell } from '../../partials/page-shell/page-shell';

@Component({
    imports: [PageShell],
    selector: 'app-contact',
    styleUrl: './contact.scss',
    templateUrl: './contact.html',
    standalone: true
})
export class Contact {
}
