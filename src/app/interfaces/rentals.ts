import { Info } from './common';

export type RentalInfo = Info;

export interface HelmetRental {
    description: string;
    icon: string;
    label: string;
    price: number;
    priceLabel: string;
}

export interface RentalGroup {
    description?: string;
    items: RentalPrice[];
    title: string;
}

export interface RentalPrice {
    fullDay: number;
    halfDay: number;
    label: string;
}
