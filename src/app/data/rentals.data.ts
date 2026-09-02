import { HelmetRental, RentalGroup, RentalInfo } from '../interfaces/rentals';

export const RENTAL_GROUPS: RentalGroup[] = [
    {
        title: 'Ski Rentals',
        description: 'Complete ski packages and individual equipment rentals.',
        items: [
            {
                label: 'Ski Package — Skis, Boots & Poles',
                fullDay: 30,
                halfDay: 25
            },
            {
                label: 'Ski Package — Age 12 & Under',
                fullDay: 25,
                halfDay: 20
            },
            {
                label: 'Skis Only',
                fullDay: 20,
                halfDay: 15
            },
            {
                label: 'Boots Only',
                fullDay: 15,
                halfDay: 10
            },
            {
                label: 'Poles Only',
                fullDay: 7,
                halfDay: 5
            }
        ]
    },
    {
        title: 'Snowboard Rentals',
        description: 'Board packages and individual snowboard equipment rentals.',
        items: [
            {
                label: 'Snowboard Package — Board & Boots',
                fullDay: 35,
                halfDay: 30
            },
            {
                label: 'Snowboard Package — Age 12 & Under',
                fullDay: 30,
                halfDay: 25
            },
            {
                label: 'Board Only',
                fullDay: 25,
                halfDay: 20
            },
            {
                label: 'Boots Only',
                fullDay: 15,
                halfDay: 10
            }
        ]
    }
];

export const HELMET_RENTAL: HelmetRental = {
    description: 'Add a helmet to your rental for the day.',
    icon: 'fas fa-helmet-safety',
    label: 'Helmet Rental',
    price: 5,
    priceLabel: 'Per Day'
};

export const RENTAL_INFO: RentalInfo[] = [
    {
        icon: 'fas fa-clock',
        label: 'Half-Day Rentals',
        value: 'Half-day rentals begin at 12:30 PM'
    },
    {
        icon: 'fas fa-file-signature',
        label: 'Rental Waiver',
        value: 'Renters must be 18+ or have a parent or guardian sign the waiver'
    },
    {
        icon: 'fas fa-credit-card',
        label: 'Damage Deposit',
        value: 'A valid credit card is required for the equipment damage deposit'
    },
    {
        icon: 'fas fa-receipt',
        label: 'Taxes',
        value: 'All rental pricing is subject to HST'
    }
];
