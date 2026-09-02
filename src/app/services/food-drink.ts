import { Service, signal } from '@angular/core';
import { FOOD_DRINK_FEATURE, FOOD_DRINK_INFO, FOOD_MENU_GROUPS } from '../data/food-drink.data';
import { FoodDrinkInfo, FoodMenuGroup } from '../interfaces/food-drink';

@Service()
export class FoodDrinkService {
    public readonly feature = signal(FOOD_DRINK_FEATURE);

    public readonly info = signal<FoodDrinkInfo[]>(FOOD_DRINK_INFO);

    public readonly menuGroups = signal<FoodMenuGroup[]>(FOOD_MENU_GROUPS);
}
