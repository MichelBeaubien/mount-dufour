import { Routes } from '@angular/router';
import { SITE_PAGES } from './config/site-map';

export const routes: Routes = [
    {
        path: SITE_PAGES.home.path,
        loadComponent: () =>
            import('./pages/home/home')
                .then((m) => m.Home),
        title: SITE_PAGES.home.title
    },
    {
        path: SITE_PAGES.mountain.path,
        loadComponent: () =>
            import('./pages/mountain/mountain/mountain')
                .then((m) => m.Mountain),
        title: SITE_PAGES.mountain.title
    },
    {
        path: SITE_PAGES.conditions.path,
        loadComponent: () =>
            import('./pages/mountain/conditions/conditions')
                .then((m) => m.Conditions),
        title: SITE_PAGES.conditions.title
    },
    {
        path: SITE_PAGES.trailMap.path,
        loadComponent: () =>
            import('./pages/mountain/trail-map/trail-map')
                .then((m) => m.TrailMap),
        title: SITE_PAGES.trailMap.title
    },
    {
        path: SITE_PAGES.hours.path,
        loadComponent: () =>
            import('./pages/mountain/hours/hours')
                .then((m) => m.Hours),
        title: SITE_PAGES.hours.title
    },
    {
        path: SITE_PAGES.about.path,
        loadComponent: () =>
            import('./pages/mountain/about/about')
                .then((m) => m.About),
        title: SITE_PAGES.about.title
    },
    {
        path: SITE_PAGES.tickets.path,
        loadComponent: () =>
            import('./pages/tickets/tickets/tickets')
                .then((m) => m.Tickets),
        title: SITE_PAGES.tickets.title
    },
    {
        path: SITE_PAGES.liftTickets.path,
        loadComponent: () =>
            import('./pages/tickets/lift-tickets/lift-tickets')
                .then((m) => m.LiftTickets),
        title: SITE_PAGES.liftTickets.title
    },
    {
        path: SITE_PAGES.seasonPasses.path,
        loadComponent: () =>
            import('./pages/tickets/season-passes/season-passes')
                .then((m) => m.SeasonPasses),
        title: SITE_PAGES.seasonPasses.title
    },
    {
        path: SITE_PAGES.deals.path,
        loadComponent: () =>
            import('./pages/tickets/deals/deals')
                .then((m) => m.Deals),
        title: SITE_PAGES.deals.title
    },
    {
        path: SITE_PAGES.lessonsRentals.path,
        loadComponent: () =>
            import('./pages/lessons-rentals/lessons-rentals/lessons-rentals')
                .then((m) => m.LessonsRentals),
        title: SITE_PAGES.lessonsRentals.title
    },
    {
        path: SITE_PAGES.snowSchool.path,
        loadComponent: () =>
            import('./pages/lessons-rentals/snow-school/snow-school')
                .then((m) => m.SnowSchool),
        title: SITE_PAGES.snowSchool.title
    },
    {
        path: SITE_PAGES.rentals.path,
        loadComponent: () =>
            import('./pages/lessons-rentals/rentals/rentals')
                .then((m) => m.Rentals),
        title: SITE_PAGES.rentals.title
    },
    {
        path: SITE_PAGES.chalet.path,
        loadComponent: () =>
            import('./pages/chalet/chalet/chalet')
                .then((m) => m.Chalet),
        title: SITE_PAGES.chalet.title
    },
    {
        path: SITE_PAGES.foodDrink.path,
        loadComponent: () =>
            import('./pages/chalet/food-drink/food-drink')
                .then((m) => m.FoodDrink),
        title: SITE_PAGES.foodDrink.title
    },
    {
        path: SITE_PAGES.lounge.path,
        loadComponent: () =>
            import('./pages/chalet/lounge/lounge')
                .then((m) => m.Lounge),
        title: SITE_PAGES.lounge.title
    },
    {
        path: SITE_PAGES.lockers.path,
        loadComponent: () =>
            import('./pages/chalet/lockers/lockers')
                .then((m) => m.Lockers),
        title: SITE_PAGES.lockers.title
    },
    {
        path: SITE_PAGES.newsEvents.path,
        loadComponent: () =>
            import('./pages/news-events/news-events')
                .then((m) => m.NewsEvents),
        title: SITE_PAGES.newsEvents.title
    },
    {
        path: SITE_PAGES.planYourVisit.path,
        loadComponent: () =>
            import('./pages/plan-your-visit/plan-your-visit')
                .then((m) => m.PlanYourVisit),
        title: SITE_PAGES.planYourVisit.title
    },
    {
        path: SITE_PAGES.sponsors.path,
        loadComponent: () =>
            import('./pages/sponsors/sponsors')
                .then((m) => m.Sponsors),
        title: SITE_PAGES.sponsors.title
    },
    {
        path: SITE_PAGES.safety.path,
        loadComponent: () =>
            import('./pages/safety/safety')
                .then((m) => m.Safety),
        title: SITE_PAGES.safety.title
    },
    {
        path: SITE_PAGES.documents.path,
        loadComponent: () =>
            import('./pages/documents/documents')
                .then((m) => m.Documents),
        title: SITE_PAGES.documents.title
    },
    {
        path: SITE_PAGES.contact.path,
        loadComponent: () =>
            import('./pages/contact/contact')
                .then((m) => m.Contact),
        title: SITE_PAGES.contact.title
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found/not-found')
                .then((m) => m.NotFound),
        title: 'Page Not Found | Mount Dufour'
    }
];
