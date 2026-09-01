import { InjectionToken } from '@angular/core';
import { SITE_PAGES } from '../site-map';
import { Experience, QuickLink } from '../../interfaces/mountain';

export const MOUNTAIN_EXPERIENCES = new InjectionToken<Experience[]>('mountain-experience', {
    providedIn: 'root',
    factory: () => ([
        {
            description: 'Affordable day tickets and season passes for skiers and snowboarders of all ages.',
            icon: 'fas fa-ticket',
            label: 'Tickets & Passes',
            path: SITE_PAGES.tickets.url,
            title: 'Get on the mountain'
        },
        {
            description: 'Private ski and snowboard instruction for beginners and riders looking to improve.',
            icon: 'fas fa-person-skiing',
            label: 'Snow School',
            path: SITE_PAGES.snowSchool.url,
            title: 'Learn to ski or ride'
        },
        {
            description: 'Ski and snowboard equipment available right at the hill, including helmets and full packages.',
            icon: 'fas fa-helmet-safety',
            label: 'Equipment Rentals',
            path: SITE_PAGES.rentals.url,
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
            path: SITE_PAGES.conditions.url
        },
        {
            description: 'Explore the mountain.',
            icon: 'fas fa-map',
            label: 'Trail Map',
            path: SITE_PAGES.trailMap.url
        },
        {
            description: 'View hill operating times.',
            icon: 'fas fa-clock',
            label: 'Hours',
            path: SITE_PAGES.hours.url
        },
        {
            description: 'Everything for your visit.',
            icon: 'fas fa-location-dot',
            label: 'Plan Your Visit',
            path: SITE_PAGES.planYourVisit.url
        }
    ])
});
