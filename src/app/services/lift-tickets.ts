import { computed, Service, signal } from '@angular/core';
import { BEGINNER_LIFT, KIDS_SPECIAL, LIFT_TICKET_INFO, LIFT_TICKETS } from '../data/lift-ticket.data';
import { LiftTicketsPrice } from '../interfaces/mountain';

@Service()
export class LiftTicketsService {
    public readonly beginnerLift = signal(BEGINNER_LIFT);

    public readonly kidsSpecial = signal(KIDS_SPECIAL);

    public readonly ticketInfo = signal(LIFT_TICKET_INFO);

    public readonly liftTickets = computed<LiftTicketsPrice[]>(() => this.data());

    private readonly data = signal(LIFT_TICKETS);
}
