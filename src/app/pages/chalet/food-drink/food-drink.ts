import { Component, computed, inject } from '@angular/core';
import { breadcrumbsFor } from '../../../config/site-map';
import { HeroOptions } from '../../../interfaces/hero';
import { SecondaryHero } from '../../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../../partials/section-title/section-title';
import { FoodDrinkService } from '../../../services/food-drink';

@Component({
    imports: [
        SecondaryHero,
        SectionTitle
    ],
    providers: [
        FoodDrinkService
    ],
    selector: 'app-food-drink',
    styleUrl: './food-drink.scss',
    templateUrl: './food-drink.html',
    standalone: true
})
export class FoodDrink {
    public readonly foodDrinkService = inject(FoodDrinkService);

    public readonly hero = computed<HeroOptions>(() => ({
        kicker: 'Fuel Your Day',
        title: 'Food & Drink',
        description: 'Warm up, refuel and enjoy familiar favourites from the Mount Dufour canteen.',
        breadcrumbs: breadcrumbsFor('foodDrink')
    }));
}
