import { InjectionToken } from '@angular/core';
import { FooterSection } from '../../interfaces/footer';
import { NavigationItem } from '../../interfaces/navigation';

export const HEADER_NAV_ITEMS = new InjectionToken<NavigationItem[]>('header-nav-items', {
    providedIn: 'root',
    factory: () => ([
        {
            route: '/mountain',
            name: 'Mountain'
        },
        {
            route: '/tickets',
            name: 'Tickets & Passes'
        },
        {
            route: '/lessons-rentals',
            name: 'Lessons & Rentals'
        },
        {
            route: '/chalet',
            name: 'The Chalet'
        },
        {
            route: '/news-events',
            name: 'News & Events'
        },
        {
            route: '/plan-your-visit',
            name: 'Plan Your Visit'
        }
    ])
});

export const FOOTER_NAV_ITEMS = new InjectionToken<FooterSection[]>('footer-nav-items', {
    providedIn: 'root',
    factory: () => ([
        {
            title: 'Explore',
            links: [
                {
                    route: '/mountain',
                    name: 'The Mountain'
                },
                {
                    route: '/mountain/conditions',
                    name: 'Conditions'
                },
                {
                    route: '/mountain/trail-map',
                    name: 'Trail Map'
                },
                {
                    route: '/plan-your-visit',
                    name: 'Plan Your Visit'
                }
            ]
        },
        {
            title: 'Ski & Ride',
            links: [
                {
                    route: '/tickets/lift-tickets',
                    name: 'Lift Tickets'
                },
                {
                    route: '/tickets/season-passes',
                    name: 'Season Passes'
                },
                {
                    route: '/lessons-rentals/snow-school',
                    name: 'Snow School'
                },
                {
                    route: '/lessons-rentals/rentals',
                    name: 'Rentals'
                }
            ]
        },
        {
            title: 'Mount Dufour',
            links: [
                {
                    route: '/mountain/about',
                    name: 'About'
                },
                {
                    route: '/sponsors',
                    name: 'Sponsors'
                },
                {
                    route: '/safety',
                    name: 'Safety'
                },
                {
                    route: '/documents',
                    name: 'Documents'
                },
                {
                    route: '/contact',
                    name: 'Contact'
                }
            ]
        }
    ])
});
