import { computed, Service, signal } from '@angular/core';
import { SEASON_PASS_GROUPS, SEASON_PASS_INFO, SEASON_PASS_POLICY } from '../data/season-pass.data';
import { SeasonPassGroup, SeasonPassInfo, SeasonPassPolicy } from '../interfaces/tickets';

@Service()
export class SeasonPassesService {
    public readonly groups = computed<SeasonPassGroup[]>(() => this.data());

    public readonly info = signal<SeasonPassInfo[]>(SEASON_PASS_INFO);

    public readonly policy = signal<SeasonPassPolicy>(SEASON_PASS_POLICY);

    private readonly data = signal<SeasonPassGroup[]>(SEASON_PASS_GROUPS);
}
