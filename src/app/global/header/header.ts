import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_NAV_ITEMS } from '../../config/tokens/nav-items.tokens';
import { SITE_PAGES } from '../../config/site-map';
import { StatusMessage } from '../../partials/season/status-message/status-message';
import { MountainService } from '../../services/mountain';

@Component({
    imports: [
        RouterLink,
        RouterLinkActive,
        StatusMessage
    ],
    selector: 'app-header',
    styleUrl: './header.scss',
    templateUrl: './header.html',
    standalone: true
})
export class Header {
    public readonly activeDropdown = signal<string | null>(null);

    public readonly isMenuOpen = signal<boolean>(false);

    public readonly mountainService = inject(MountainService);

    public readonly navItems = inject(HEADER_NAV_ITEMS);

    public readonly pages = SITE_PAGES;

    public closeDropdown(): void {
        this.activeDropdown.set(null);
    }

    public closeMenu(): void {
        this.isMenuOpen.set(false);
        this.closeDropdown();
    }

    public isDropdownOpen(route: string): boolean {
        return this.activeDropdown() === route;
    }

    public openDropdown(route: string): void {
        this.activeDropdown.set(route);
    }

    public toggleDropdown(route: string): void {
        this.activeDropdown.update((activeRoute) => activeRoute === route ? null : route);
    }

    public toggleMenu(): void {
        this.isMenuOpen.update((isOpen) => !isOpen);
    }
}
