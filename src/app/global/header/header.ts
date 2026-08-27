import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HEADER_NAV_ITEMS } from '../../config/tokens/nav-items.tokens';
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
    public readonly isMenuOpen = signal<boolean>(false);

    public readonly mountainService = inject(MountainService);

    public readonly navItems = inject(HEADER_NAV_ITEMS);

    public closeMenu(): void {
        this.isMenuOpen.set(false);
    }

    public toggleMenu(): void {
        this.isMenuOpen.update((isOpen) => !isOpen);
    }
}
