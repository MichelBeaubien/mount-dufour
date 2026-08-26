import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home')
                .then((m) => m.Home),
        title: 'Mount Dufour Ski Area'
    },
    {
        path: 'mountain',
        loadComponent: () =>
            import('./pages/mountain/mountain/mountain')
                .then((m) => m.Mountain),
        title: 'The Mountain | Mount Dufour'
    },
    {
        path: 'mountain/conditions',
        loadComponent: () =>
            import('./pages/mountain/conditions/conditions')
                .then((m) => m.Conditions),
        title: 'Mountain Conditions | Mount Dufour'
    },
    {
        path: 'mountain/trail-map',
        loadComponent: () =>
            import('./pages/mountain/trail-map/trail-map')
                .then((m) => m.TrailMap),
        title: 'Trail Map | Mount Dufour'
    },
    {
        path: 'mountain/hours',
        loadComponent: () =>
            import('./pages/mountain/hours/hours')
                .then((m) => m.Hours),
        title: 'Hours | Mount Dufour'
    },
    {
        path: 'mountain/about',
        loadComponent: () =>
            import('./pages/mountain/about/about')
                .then((m) => m.About),
        title: 'About Mount Dufour'
    },
    {
        path: 'tickets',
        loadComponent: () =>
            import('./pages/tickets/tickets/tickets')
                .then((m) => m.Tickets),
        title: 'Tickets & Passes | Mount Dufour'
    },
    {
        path: 'tickets/lift-tickets',
        loadComponent: () =>
            import('./pages/tickets/lift-tickets/lift-tickets')
                .then((m) => m.LiftTickets),
        title: 'Lift Tickets | Mount Dufour'
    },
    {
        path: 'tickets/season-passes',
        loadComponent: () =>
            import('./pages/tickets/season-passes/season-passes')
                .then((m) => m.SeasonPasses),
        title: 'Season Passes | Mount Dufour'
    },
    {
        path: 'tickets/deals',
        loadComponent: () =>
            import('./pages/tickets/deals/deals')
                .then((m) => m.Deals),
        title: 'Deals | Mount Dufour'
    },
    {
        path: 'lessons-rentals',
        loadComponent: () =>
            import('./pages/lessons-rentals/lessons-rentals/lessons-rentals')
                .then((m) => m.LessonsRentals),
        title: 'Lessons & Rentals | Mount Dufour'
    },
    {
        path: 'lessons-rentals/snow-school',
        loadComponent: () =>
            import('./pages/lessons-rentals/snow-school/snow-school')
                .then((m) => m.SnowSchool),
        title: 'Snow School | Mount Dufour'
    },
    {
        path: 'lessons-rentals/rentals',
        loadComponent: () =>
            import('./pages/lessons-rentals/rentals/rentals')
                .then((m) => m.Rentals),
        title: 'Equipment Rentals | Mount Dufour'
    },
    {
        path: 'chalet',
        loadComponent: () =>
            import('./pages/chalet/chalet/chalet')
                .then((m) => m.Chalet),
        title: 'The Chalet | Mount Dufour'
    },
    {
        path: 'chalet/food-drink',
        loadComponent: () =>
            import('./pages/chalet/food-drink/food-drink')
                .then((m) => m.FoodDrink),
        title: 'Food & Drink | Mount Dufour'
    },
    {
        path: 'chalet/lounge',
        loadComponent: () =>
            import('./pages/chalet/lounge/lounge')
                .then((m) => m.Lounge),
        title: 'Slopeside Lounge | Mount Dufour'
    },
    {
        path: 'chalet/lockers',
        loadComponent: () =>
            import('./pages/chalet/lockers/lockers')
                .then((m) => m.Lockers),
        title: 'Lockers | Mount Dufour'
    },
    {
        path: 'news-events',
        loadComponent: () =>
            import('./pages/news-events/news-events')
                .then((m) => m.NewsEvents),
        title: 'News & Events | Mount Dufour'
    },
    {
        path: 'plan-your-visit',
        loadComponent: () =>
            import('./pages/plan-your-visit/plan-your-visit')
                .then((m) => m.PlanYourVisit),
        title: 'Plan Your Visit | Mount Dufour'
    },
    {
        path: 'sponsors',
        loadComponent: () =>
            import('./pages/sponsors/sponsors')
                .then((m) => m.Sponsors),
        title: 'Sponsors | Mount Dufour'
    },
    {
        path: 'safety',
        loadComponent: () =>
            import('./pages/safety/safety')
                .then((m) => m.Safety),
        title: 'Safety | Mount Dufour'
    },
    {
        path: 'documents',
        loadComponent: () =>
            import('./pages/documents/documents')
                .then((m) => m.Documents),
        title: 'Documents | Mount Dufour'
    },
    {
        path: 'contact',
        loadComponent: () =>
            import('./pages/contact/contact')
                .then((m) => m.Contact),
        title: 'Contact | Mount Dufour'
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found/not-found')
                .then((m) => m.NotFound),
        title: 'Page Not Found | Mount Dufour'
    }
];
