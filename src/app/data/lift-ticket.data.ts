import { LiftTicketPrice } from '../interfaces/mountain';

export const LIFT_TICKETS: LiftTicketPrice[] = [
    {
        label: 'Adult',
        ageRange: 'Ages 19+',
        fullDay: 65,
        halfDay: 55
    },
    {
        label: 'Senior',
        ageRange: 'Ages 60+',
        fullDay: 55,
        halfDay: 45
    },
    {
        label: 'Teen',
        ageRange: 'Ages 13–18',
        fullDay: 60,
        halfDay: 50
    },
    {
        label: 'Junior',
        ageRange: 'Ages 6–12',
        fullDay: 45,
        halfDay: 35
    }
];

export const BEGINNER_LIFT_PRICE = 15;
