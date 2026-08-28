export interface NavigationItem {
    route: string;
    name: string;
    children?: { route: string; name: string }[];
}
