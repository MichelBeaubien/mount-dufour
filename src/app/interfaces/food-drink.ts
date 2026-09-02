import { Content, Info } from './common';

export type FoodDrinkFeature = Content;

export type FoodDrinkInfo = Info;

export interface FoodMenuGroup {
    icon: string;
    items: string[];
    title: string;
}
