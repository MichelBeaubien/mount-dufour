import { Component } from '@angular/core';
import { PageShell } from '../../../partials/page-shell/page-shell';

@Component({
    imports: [PageShell],
    selector: 'app-food-drink',
    styleUrl: './food-drink.scss',
    templateUrl: './food-drink.html',
    standalone: true
})
export class FoodDrink {
}
