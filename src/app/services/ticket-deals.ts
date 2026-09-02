import { computed, Service, signal } from '@angular/core';
import { TICKET_DEAL_INFO, TICKET_DEALS } from '../data/ticket-deals.data';
import { TicketDeal, TicketDealInfo } from '../interfaces/tickets';

@Service()
export class TicketDealsService {
    public readonly activeDeals = computed<TicketDeal[]>(() => this.data().filter((deal) => deal.status === 'active'));

    public readonly hasActiveDeals = computed<boolean>(() => this.activeDeals().length > 0);

    public readonly info = signal<TicketDealInfo[]>(TICKET_DEAL_INFO);

    public readonly upcomingDeals = computed<TicketDeal[]>(() => this.data().filter((deal) => deal.status === 'upcoming'));

    private readonly data = signal<TicketDeal[]>(TICKET_DEALS);
}
