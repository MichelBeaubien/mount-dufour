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
    title: string;
}
