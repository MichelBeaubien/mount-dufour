import type { Breadcrumb } from '../interfaces/hero';
import type { FooterSection } from '../interfaces/footer';
import type { NavigationItem } from '../interfaces/navigation';

export type SitePageId =
    | 'home'
    | 'mountain'
    | 'conditions'
    | 'trailMap'
    | 'hours'
    | 'about'
    | 'tickets'
    | 'liftTickets'
    | 'seasonPasses'
    | 'deals'
    | 'lessonsRentals'
    | 'snowSchool'
    | 'rentals'
    | 'chalet'
    | 'foodDrink'
    | 'lounge'
    | 'lockers'
    | 'newsEvents'
    | 'planYourVisit'
    | 'sponsors'
    | 'safety'
    | 'documents'
    | 'contact';

export interface SitePage {
    readonly id: SitePageId;
    readonly label: string;
    readonly parent?: SitePageId;
    readonly path: string;
    readonly summary: string;
    readonly title: string;
    readonly url: string;
}

const page = (
    id: SitePageId,
    path: string,
    label: string,
    title: string,
    summary: string,
    parent?: SitePageId
): SitePage => ({
    id,
    label,
    parent,
    path,
    summary,
    title,
    url: path ? `/${path}` : '/'
});

export const SITE_PAGES: Record<SitePageId, SitePage> = {
    home: page('home', '', 'Home', 'Mount Dufour Ski Area', 'Ski, ride, learn and explore in Elliot Lake.'),
    mountain: page('mountain', 'mountain', 'Mountain', 'The Mountain | Mount Dufour', 'Explore the trails, lifts and everything happening on the hill.'),
    conditions: page('conditions', 'mountain/conditions', 'Conditions', 'Mountain Conditions | Mount Dufour', 'Current trail, lift and terrain park conditions.', 'mountain'),
    trailMap: page('trailMap', 'mountain/trail-map', 'Trail Map', 'Trail Map | Mount Dufour', 'Find your way around the mountain.', 'mountain'),
    hours: page('hours', 'mountain/hours', 'Hours', 'Hours | Mount Dufour', 'Plan your day on the mountain.', 'mountain'),
    about: page('about', 'mountain/about', 'About', 'About Mount Dufour', 'Meet Mount Dufour and the people behind it.', 'mountain'),
    tickets: page('tickets', 'tickets', 'Tickets', 'Tickets & Passes | Mount Dufour', 'Choose the right ticket or pass for your day.'),
    liftTickets: page('liftTickets', 'tickets/lift-tickets', 'Lift Tickets', 'Lift Tickets | Mount Dufour', 'Lift ticket options for skiing and snowboarding.', 'tickets'),
    seasonPasses: page('seasonPasses', 'tickets/season-passes', 'Season Passes', 'Season Passes | Mount Dufour', 'Season pass options and membership information.', 'tickets'),
    deals: page('deals', 'tickets/deals', 'Deals', 'Deals | Mount Dufour', 'Current offers and special deals.', 'tickets'),
    lessonsRentals: page('lessonsRentals', 'lessons-rentals', 'Lessons & Rentals', 'Lessons & Rentals | Mount Dufour', 'Learn, improve and get the equipment you need.'),
    snowSchool: page('snowSchool', 'lessons-rentals/snow-school', 'Snow School', 'Snow School | Mount Dufour', 'Private ski and snowboard instruction for every skill level.', 'lessonsRentals'),
    rentals: page('rentals', 'lessons-rentals/rentals', 'Equipment Rentals', 'Equipment Rentals | Mount Dufour', 'Ski, snowboard and helmet rentals at the hill.', 'lessonsRentals'),
    chalet: page('chalet', 'chalet', 'Chalet', 'The Chalet | Mount Dufour', 'Everything you need at the base of the hill.'),
    foodDrink: page('foodDrink', 'chalet/food-drink', 'Food & Drink', 'Food & Drink | Mount Dufour', 'Refuel between runs at the chalet canteen.', 'chalet'),
    lounge: page('lounge', 'chalet/lounge', 'Slopeside Lounge', 'Slopeside Lounge | Mount Dufour', 'Unwind in the licensed slopeside lounge.', 'chalet'),
    lockers: page('lockers', 'chalet/lockers', 'Lockers', 'Lockers | Mount Dufour', 'Lockers and change area information.', 'chalet'),
    newsEvents: page('newsEvents', 'news-events', 'News & Events', 'News & Events | Mount Dufour', 'Announcements, events and updates from the hill.'),
    planYourVisit: page('planYourVisit', 'plan-your-visit', 'Plan Your Visit', 'Plan Your Visit | Mount Dufour', 'Everything to know before you arrive.'),
    sponsors: page('sponsors', 'sponsors', 'Sponsors', 'Sponsors | Mount Dufour', 'The local partners who support Mount Dufour.'),
    safety: page('safety', 'safety', 'Safety', 'Safety | Mount Dufour', 'Safety, responsibility and risk awareness on the hill.'),
    documents: page('documents', 'documents', 'Documents', 'Documents | Mount Dufour', 'Policies, forms and important documents.'),
    contact: page('contact', 'contact', 'Contact', 'Contact | Mount Dufour', 'Get in touch with Mount Dufour.')
};

export const breadcrumbsFor = (pageId: SitePageId): Breadcrumb[] => {
    const lineage: SitePageId[] = [];
    let current: SitePage | undefined = SITE_PAGES[pageId];

    while (current) {
        lineage.unshift(current.id);
        current = current.parent ? SITE_PAGES[current.parent] : undefined;
    }

    return lineage.map((id, index) => ({
        label: SITE_PAGES[id].label,
        route: index === lineage.length - 1 ? undefined : SITE_PAGES[id].url
    }));
};

const HEADER_NAVIGATION_IDS: SitePageId[] = [
    'mountain',
    'tickets',
    'lessonsRentals',
    'chalet',
    'newsEvents',
    'planYourVisit'
];

export const HEADER_NAVIGATION: NavigationItem[] = HEADER_NAVIGATION_IDS.map((pageId) => ({
    name: SITE_PAGES[pageId].label,
    route: SITE_PAGES[pageId].url,
    children: Object.values(SITE_PAGES)
        .filter((page) => page.parent === pageId)
        .map((page) => ({ name: page.label, route: page.url }))
}));

const footerSection = (title: string, pageIds: SitePageId[]): FooterSection => ({
    title,
    links: pageIds.map((pageId) => ({
        name: SITE_PAGES[pageId].label,
        route: SITE_PAGES[pageId].url
    }))
});

export const FOOTER_NAVIGATION: FooterSection[] = [
    footerSection('Explore', ['mountain', 'conditions', 'trailMap', 'planYourVisit']),
    footerSection('Ski & Ride', ['liftTickets', 'seasonPasses', 'snowSchool', 'rentals']),
    footerSection('Mount Dufour', ['about', 'sponsors', 'safety', 'documents', 'contact'])
];
