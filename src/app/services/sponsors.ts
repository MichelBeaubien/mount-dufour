import { computed, Service, signal } from '@angular/core';
import { SPONSORS } from '../data/sponsors.data';
import { Sponsor } from '../interfaces/sponsors';

@Service()
export class SponsorsService {
    public readonly sponsors = computed<Sponsor[]>(() => this.data());

    private readonly data = signal<Sponsor[]>(SPONSORS);
}
