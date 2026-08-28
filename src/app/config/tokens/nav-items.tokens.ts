import { InjectionToken } from '@angular/core';
import { FooterSection } from '../../interfaces/footer';
import { NavigationItem } from '../../interfaces/navigation';

export const HEADER_NAV_ITEMS = new InjectionToken<NavigationItem[]>('header-nav-items', {
    providedIn: 'root',
    factory: () => ([
        {
            children: [
                {
                    name: 'About',
                    route: '/mountain/about'
                },
                {
                    name: 'Conditions',
                    route: '/mountain/conditions'
                },
                {
                    name: 'Trail Map',
                    route: '/mountain/trail-map'
                },
                {
                    name: 'Hours',
                    route: '/mountain/hours'
                }
            ],
            name: 'Mountain',
            route: '/mountain'
        },
        {
            children: [
                {
                    name: 'Lift Tickets',
                    route: '/tickets/lift-tickets'
                },
                {
                    name: 'Season Passes',
                    route: '/tickets/season-passes'
                },
                {
                    name: 'Deals',
                    route: '/tickets/deals'
                }
            ],
            name: 'Tickets',
            route: '/tickets'
        },
        {
            children: [
                {
                    name: 'Snow School',
                    route: '/lessons-rentals/snow-school'
                },
                {
                    name: 'Equipment Rentals',
                    route: '/lessons-rentals/rentals'
                }
            ],
            name: 'Lessons & Rentals',
            route: '/lessons-rentals'
        },
        {
            children: [
                {
                    name: 'Food & Drink',
                    route: '/chalet/food-drink'
                },
                {
                    name: 'Slopeside Lounge',
                    route: '/chalet/lounge'
                },
                {
                    name: 'Lockers',
                    route: '/chalet/lockers'
                }
            ],
            name: 'Chalet',
            route: '/chalet'
        },
        {
            name: 'News & Events',
            route: '/news-events'
        },
        {
            name: 'Plan Your Visit',
            route: '/plan-your-visit'
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
