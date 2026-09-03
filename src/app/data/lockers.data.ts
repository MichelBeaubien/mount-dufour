import { LockerInfo, LockerIntro } from '../interfaces/lockers';

export const LOCKER_INTRO: LockerIntro = {
    description: 'Located inside the chalet, the lockers and change area give skiers and riders a convenient place to get ready before heading out on the mountain.',
    kicker: 'Start at the Chalet',
    title: 'Get Ready. Gear Up. Head Out.'
};

export const LOCKER_INFO: LockerInfo[] = [
    {
        icon: 'fas fa-person-skiing',
        label: 'Change Area',
        value: 'Get your boots and winter gear on before heading out to the slopes.'
    },
    {
        icon: 'fas fa-box',
        label: 'Lockers',
        value: 'Locker facilities are available inside the Mount Dufour chalet.'
    },
    {
        icon: 'fas fa-mountain',
        label: 'Base Lodge Location',
        value: 'The chalet is located directly at the base of Main and close to the quad lift.'
    }
];
