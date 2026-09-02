import { TicketDeal, TicketDealInfo } from '../interfaces/tickets';

export const TICKET_DEALS: TicketDeal[] = [
    {
        kicker: 'Coming This Fall',
        title: 'Early Bird Season Passes',
        description: 'Save on your season pass by purchasing during Mount Dufour’s annual Early Bird promotion.',
        icon: 'fas fa-ticket',
        status: 'upcoming'
    }
];

export const TICKET_DEAL_INFO: TicketDealInfo[] = [
    {
        icon: 'fas fa-calendar-days',
        label: 'Seasonal Offers',
        value: 'Special offers and promotions may change throughout the ski season.'
    },
    {
        icon: 'fas fa-bell',
        label: 'Check Back Often',
        value: 'New deals will be posted here as they become available.'
    },
    {
        icon: 'fas fa-circle-info',
        label: 'Offer Details',
        value: 'Eligibility, availability and deadlines may vary by promotion.'
    }
];
