import { Service, signal } from '@angular/core';
import { LOUNGE_FEATURES, LOUNGE_INFO, LOUNGE_INTRO } from '../data/lounge.data';
import { LoungeFeature, LoungeInfo, LoungeIntro } from '../interfaces/lounge';

@Service()
export class LoungeService {
    public readonly features = signal<LoungeFeature[]>(LOUNGE_FEATURES);

    public readonly info = signal<LoungeInfo[]>(LOUNGE_INFO);

    public readonly intro = signal<LoungeIntro>(LOUNGE_INTRO);
}
