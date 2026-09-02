import { Content, Info } from './common';

export type DealStatus = 'active' | 'upcoming';

export type LiftTicketInfo = Info;

export type SeasonPassInfo = Info;

export type TicketDealInfo = Info;

export interface BeginnerLift {
    description: string;
    label: string;
    price: number;
    priceLabel: string;
}

export interface KidsSpecial extends Content {
    disclaimer: string;
    price: number;
}

export interface LiftTicketsPrice {
    ageRange?: string;
    fullDay: number;
    halfDay: number;
    label: string;
}

export interface SeasonPassGroup {
    description?: string;
    options: SeasonPassOption[];
    title: string;
}

export interface SeasonPassOption {
    ageRange?: string;
    label: string;
    price: number;
}

export interface SeasonPassPolicy extends Content {
    disclaimer: string;
}

export interface TicketDeal extends Content {
    icon: string;
    status: DealStatus;
    validUntil?: string;
}
