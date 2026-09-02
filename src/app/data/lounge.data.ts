import { LoungeFeature, LoungeInfo, LoungeIntro } from '../interfaces/lounge';

export const LOUNGE_FEATURES: LoungeFeature[] = [
    {
        icon: 'fas fa-fire',
        title: 'Fireside Atmosphere',
        description: 'Warm up and relax in Mount Dufour’s fireside lounge after time on the slopes.'
    },
    {
        icon: 'fas fa-mountain-sun',
        title: 'Slopeside Location',
        description: 'The lounge is located right inside the chalet at the base of the mountain.'
    },
    {
        icon: 'fas fa-users',
        title: 'A Place to Gather',
        description: 'Take a break, meet up with friends and enjoy some time off the hill.'
    }
];

export const LOUNGE_INFO: LoungeInfo[] = [
    {
        icon: 'fas fa-martini-glass',
        label: 'Fully Licensed',
        value: 'Mount Dufour operates a fully licensed lounge inside the chalet.'
    },
    {
        icon: 'fas fa-fire-flame-curved',
        label: 'Fireside Lounge',
        value: 'A warm indoor space to unwind between runs or after a day of skiing.'
    },
    {
        icon: 'fas fa-utensils',
        label: 'Canteen Nearby',
        value: 'The chalet also includes Mount Dufour’s food canteen and kitchen.'
    }
];

export const LOUNGE_INTRO: LoungeIntro = {
    description: 'Trade your ski boots for a warm seat and enjoy a comfortable place to unwind right at the base of Mount Dufour.',
    kicker: 'Slopeside Comfort',
    title: 'Warm Up. Unwind. Stay Awhile.'
};
