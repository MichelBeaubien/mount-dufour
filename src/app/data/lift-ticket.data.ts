import { LiftTicketsPrice } from '../interfaces/mountain';

export const LIFT_TICKETS: LiftTicketsPrice[] = [
    {
        label: 'Adult',
        ageRange: '19+',
        fullDay: 65,
        halfDay: 55
    },
    {
        label: 'Senior',
        ageRange: '60+',
        fullDay: 55,
        halfDay: 45
    },
    {
        label: 'Teen',
        ageRange: '13–18',
        fullDay: 60,
        halfDay: 50
    },
    {
        label: 'Junior',
        ageRange: '6–12',
        fullDay: 45,
        halfDay: 35
    }
];

export const BEGINNER_LIFT = {
    description: 'Stay on beginner terrain while you learn the basics and build your confidence.',
    label: 'Beginner Lift',
    price: 15,
    priceLabel: 'Full or Half Day'
};

export const KIDS_SPECIAL = {
    description: 'Children ages 10 and under can ski for $35 when accompanied by an adult purchasing a full-day lift ticket.',
    disclaimer: 'Limit one $35 child pass per paying adult full-day ticket.',
    kicker: 'Family Special',
    price: 35,
    title: 'Kids 10 & Under Ski for $35'
};

export const LIFT_TICKET_INFO = [
    {
        icon: 'fas fa-clock',
        label: 'Lift Hours',
        value: '9:00 AM – 4:00 PM'
    },
    {
        icon: 'fas fa-sun',
        label: 'Half Day',
        value: 'Begins at 12:30 PM'
    },
    {
        icon: 'fas fa-receipt',
        label: 'Taxes',
        value: 'All pricing is subject to HST'
    }
];
