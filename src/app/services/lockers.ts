import { Service, signal } from '@angular/core';
import { LOCKER_INFO, LOCKER_INTRO } from '../data/lockers.data';
import { LockerInfo, LockerIntro } from '../interfaces/lockers';

@Service()
export class LockersService {
    public readonly info = signal<LockerInfo[]>(LOCKER_INFO);

    public readonly intro = signal<LockerIntro>(LOCKER_INTRO);
}
