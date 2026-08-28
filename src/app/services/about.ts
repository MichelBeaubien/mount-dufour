import { computed, Service, signal } from '@angular/core';
import { ABOUT_FEATURES } from '../data/about.data';
import { AboutFeature } from '../interfaces/mountain';

@Service()
export class AboutService {
    public readonly features = computed<AboutFeature[]>(() => this.data());

    private readonly data = signal<AboutFeature[]>(ABOUT_FEATURES);
}
