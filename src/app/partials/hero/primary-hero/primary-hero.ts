import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroOptions } from '../../../interfaces/hero';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-primary-hero',
    styleUrl: './primary-hero.scss',
    templateUrl: './primary-hero.html',
    standalone: true
})
export class PrimaryHero {
    public readonly compact = input<boolean>(false);

    public readonly hero = input.required<HeroOptions>();

    public scrollToSection(sectionId: string): void {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}
