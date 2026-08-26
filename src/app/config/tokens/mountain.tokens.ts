import { InjectionToken } from '@angular/core';
import {
    Experience,
    Lift,
    MountainStat,
    MountainStatus,
    MountainSummary,
    QuickLink,
    Trail
} from '../../interfaces/mountain';

export const MOUNTAIN_STATUS = new InjectionToken<MountainStatus>('mountain-status', {
    providedIn: 'root',
    factory: () => ('open')
});

export const MOUNTAIN_TRAILS = new InjectionToken<Trail[]>('mountain-trails', {
    providedIn: 'root',
    factory: () => ([
        {
            difficulty: 'beginner',
            groomed: true,
            name: 'Beginner\'s Trail',
            status: 'open'
        },
        {
            difficulty: 'intermediate',
            groomed: false,
            name: 'Bruno\'s Edge',
            status: 'closed'
        },
        {
            difficulty: 'advanced',
            groomed: true,
            name: 'Dengg\'s Peak',
            status: 'open'
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
            difficulty: 'intermediate',
            groomed: false,
            name: 'Valley Trail',
            status: 'hold'
        }
    ])
});

export const MOUNTAIN_SUMMARY = new InjectionToken<MountainSummary[]>('mountain-summary', {
    providedIn: 'root',
    factory: () => ([
        {
            icon: 'fas fa-mountain',
            label: 'Trails Open',
            value: '2 / 7'
        },
        {
            icon: 'fas fa-cable-car',
            label: 'Lifts Open',
            value: '0 / 2'
        },
        {
            icon: 'fas fa-person-snowboarding',
            label: 'Terrain Park',
            status: 'closed',
            value: 'Closed'
        },
        {
            icon: 'fas fa-snowflake',
            label: 'Snowmaking',
            value: '100%'
        }
    ])
});

export const MOUNTAIN_LIFTS = new InjectionToken<Lift[]>('mountain-lifts', {
    providedIn: 'root',
    factory: () => ([
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
    ])
});

export const MOUNTAIN_STATS = new InjectionToken<MountainStat[]>('mountain-stats', {
    providedIn: 'root',
    factory: () => ([
        {
            icon: 'fas fa-mountain',
            label: 'Trails',
            value: '7'
        },
        {
            icon: 'fas fa-cable-car',
            label: 'Lifts',
            value: '2'
        },
        {
            icon: 'fas fa-arrow-up',
            label: 'Vertical Feet',
            value: '320'
        },
        {
            icon: 'fas fa-snowflake',
            label: 'Snowmaking',
            value: '100%'
        }
    ])
});

export const MOUNTAIN_EXPERIENCES = new InjectionToken<Experience[]>('mountain-experience', {
    providedIn: 'root',
    factory: () => ([
        {
            description: 'Affordable day tickets and season passes for skiers and snowboarders of all ages.',
            icon: 'fas fa-ticket',
            label: 'Tickets & Passes',
            path: '/tickets',
            title: 'Get on the mountain'
        },
        {
            description: 'Private ski and snowboard instruction for beginners and riders looking to improve.',
            icon: 'fas fa-person-skiing',
            label: 'Snow School',
            path: '/lessons-rentals/snow-school',
            title: 'Learn to ski or ride'
        },
        {
            description: 'Ski and snowboard equipment available right at the hill, including helmets and full packages.',
            icon: 'fas fa-helmet-safety',
            label: 'Equipment Rentals',
            path: '/lessons-rentals/rentals',
            title: 'Gear up'
        }
    ])
});

export const MOUNTAIN_QUICK_LINKS = new InjectionToken<QuickLink[]>('mountain-quick-links', {
    providedIn: 'root',
    factory: () => ([
        {
            description: 'See trail and lift status.',
            icon: 'fas fa-mountain-sun',
            label: 'Conditions',
            path: '/mountain/conditions'
        },
        {
            description: 'Explore the mountain.',
            icon: 'fas fa-map',
            label: 'Trail Map',
            path: '/mountain/trail-map'
        },
        {
            description: 'View hill operating times.',
            icon: 'fas fa-clock',
            label: 'Hours',
            path: '/mountain/hours'
        },
        {
            description: 'Everything for your visit.',
            icon: 'fas fa-location-dot',
            label: 'Plan Your Visit',
            path: '/plan-your-visit'
        }
    ])
});
