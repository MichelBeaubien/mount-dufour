import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroOptions } from '../../../interfaces/hero';

@Component({
    imports: [
        RouterLink
    ],
    selector: 'app-secondary-hero',
    styleUrl: './secondary-hero.scss',
    templateUrl: './secondary-hero.html',
    standalone: true
})
export class SecondaryHero {
    public readonly hero = input.required<HeroOptions>();
}
