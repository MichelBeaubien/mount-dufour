import { computed, Service, signal } from '@angular/core';
import { HELMET_RENTAL, RENTAL_GROUPS, RENTAL_INFO } from '../data/rentals.data';
import { HelmetRental, RentalGroup, RentalInfo } from '../interfaces/rentals';

@Service()
export class RentalsService {
    public readonly helmetRental = signal<HelmetRental>(HELMET_RENTAL);

    public readonly info = signal<RentalInfo[]>(RENTAL_INFO);

    public readonly rentalGroups = computed<RentalGroup[]>(() => this.data());

    private readonly data = signal<RentalGroup[]>(RENTAL_GROUPS);
}
