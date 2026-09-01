import { Component, contentChild, ElementRef, input } from '@angular/core';

@Component({
    selector: 'app-section-title',
    styleUrl: './section-title.scss',
    templateUrl: './section-title.html',
    standalone: true
})
export class SectionTitle {
    public readonly description = input<string>();

    public readonly kicker = input<string>();

    public readonly title = input.required<string>();

    public readonly titleSpan = input<string>();
}
