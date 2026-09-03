import { MountainData } from '../interfaces/mountain';

export const MOUNTAIN_DATA: MountainData = {
    lifts: [
        {
            name: 'Quad Lift',
            status: 'closed',
            type: 'Chairlift'
        },
        {
            name: 'Beginner Platter Lift',
            status: 'closed',
            type: 'Surface Lift'
        }
    ],
    season: {
        message: 'Closed for the Season',
        status: 'closed'
    },
    snowmakingPercent: 100,
    status: 'closed',
    terrainPark: {
        status: 'closed'
    },
    trails: [
        {
            difficulty: 'beginner',
            groomed: true,
            name: 'Beginner\'s Trail',
            status: 'closed'
        },
        {
            difficulty: 'advanced',
            groomed: false,
            name: 'Bruno\'s Edge',
            status: 'closed'
        },
        {
            difficulty: 'advanced',
            groomed: true,
            name: 'Dengg\'s Peak',
            status: 'closed'
        },
        {
            difficulty: 'beginner',
            groomed: false,
            name: 'Family Trail',
            status: 'hold'
        },
        {
            difficulty: 'advanced',
            groomed: false,
            name: 'Idiot\'s Delight',
            status: 'closed'
        },
        {
            difficulty: 'intermediate',
            groomed: false,
            name: 'Main Run',
            status: 'closed'
        },
        {
            difficulty: 'beginner',
            groomed: false,
            name: 'Valley Trail',
            status: 'hold'
        }
    ],
    verticalFeet: 320
};
