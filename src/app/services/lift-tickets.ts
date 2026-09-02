import { computed, Service, signal } from '@angular/core';
import { BEGINNER_LIFT, KIDS_SPECIAL, LIFT_TICKET_INFO, LIFT_TICKETS } from '../data/lift-ticket.data';
import { BeginnerLift, KidsSpecial, LiftTicketInfo, LiftTicketsPrice } from '../interfaces/tickets';

@Service()
export class LiftTicketsService {
    public readonly beginnerLift = signal<BeginnerLift>(BEGINNER_LIFT);

    public readonly kidsSpecial = signal<KidsSpecial>(KIDS_SPECIAL);

    public readonly ticketInfo = signal<LiftTicketInfo[]>(LIFT_TICKET_INFO);

    public readonly liftTickets = computed<LiftTicketsPrice[]>(() => this.data());

    private readonly data = signal<LiftTicketsPrice[]>(LIFT_TICKETS);
}
