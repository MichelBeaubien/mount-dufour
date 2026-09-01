export interface Breadcrumb {
    label: string;
    route?: string;
}

export interface HeroOptions {
    breadcrumbs?: Breadcrumb[];
    description?: string;
    image?: string;
    imageAlt?: string;
    kicker?: string;
    kickerIcon?: string;
    title: string;
    titleSpan?: string;
    scrollTo?: {
        label: string;
        href: string;
    };
}
