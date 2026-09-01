import { InjectionToken } from '@angular/core';
import { FOOTER_NAVIGATION, HEADER_NAVIGATION } from '../site-map';
import { FooterSection } from '../../interfaces/footer';
import { NavigationItem } from '../../interfaces/navigation';

export const HEADER_NAV_ITEMS = new InjectionToken<NavigationItem[]>('header-nav-items', {
    providedIn: 'root',
    factory: () => HEADER_NAVIGATION
});

export const FOOTER_NAV_ITEMS = new InjectionToken<FooterSection[]>('footer-nav-items', {
    providedIn: 'root',
    factory: () => FOOTER_NAVIGATION
});
