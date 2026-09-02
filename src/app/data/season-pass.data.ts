import { SeasonPassGroup, SeasonPassInfo, SeasonPassPolicy } from '../interfaces/tickets';

export const SEASON_PASS_GROUPS: SeasonPassGroup[] = [
    {
        title: 'Family',
        description: 'For families living at the same address.',
        options: [
            {
                label: 'First Adult',
                price: 525
            },
            {
                label: 'Second Adult',
                price: 445
            },
            {
                ageRange: '13–18',
                label: 'Teen',
                price: 315
            },
            {
                ageRange: '11–12',
                label: 'Junior',
                price: 240
            },
            {
                ageRange: '10 & Under',
                label: 'Child',
                price: 210
            },
            {
                ageRange: '5 & Under',
                label: 'Child',
                price: 0
            }
        ]
    },
    {
        title: 'Single Adult Family',
        description: 'Pass options for a household with one adult.',
        options: [
            {
                label: 'Adult',
                price: 525
            },
            {
                ageRange: '13–18',
                label: 'Teen',
                price: 420
            },
            {
                ageRange: '11–12',
                label: 'Junior',
                price: 290
            },
            {
                ageRange: '10 & Under',
                label: 'Child',
                price: 210
            },
            {
                ageRange: '5 & Under',
                label: 'Child',
                price: 0
            }
        ]
    },
    {
        title: 'Individual',
        options: [
            {
                ageRange: '60+',
                label: 'Senior',
                price: 420
            },
            {
                ageRange: '19–59',
                label: 'Adult',
                price: 595
            },
            {
                ageRange: '13–18',
                label: 'Teen',
                price: 495
            },
            {
                ageRange: '11–12',
                label: 'Junior',
                price: 405
            },
            {
                ageRange: '10 & Under',
                label: 'Child',
                price: 320
            },
            {
                ageRange: '5 & Under',
                label: 'Child',
                price: 0
            }
        ]
    }
];

export const SEASON_PASS_INFO: SeasonPassInfo[] = [
    {
        icon: 'fas fa-file-signature',
        label: 'Waiver Required',
        value: 'A signed waiver is mandatory with every season pass purchase.'
    },
    {
        icon: 'fas fa-id-card',
        label: 'Proof of Age',
        value: 'Proof of age or valid full-time student identification may be required.'
    },
    {
        icon: 'fas fa-house',
        label: 'Family Passes',
        value: 'Family members must reside at the same address.'
    }
];

export const SEASON_PASS_POLICY: SeasonPassPolicy = {
    description: 'Season passes are valid on all Mount Dufour operating days.',
    disclaimer: 'Season passes are non-refundable and non-transferable.',
    kicker: 'Unlimited Winter',
    title: 'Make the Mountain Yours'
};
