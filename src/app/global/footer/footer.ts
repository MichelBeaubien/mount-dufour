import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FOOTER_NAV_ITEMS } from '../../config/tokens/nav-items.tokens';

@Component({
    imports: [
        RouterLink,
        RouterLinkActive
    ],
    selector: 'app-footer',
    styleUrl: './footer.scss',
    templateUrl: './footer.html',
    standalone: true
})
export class Footer {
    public readonly year: number = new Date().getFullYear();

    public readonly navItems = inject(FOOTER_NAV_ITEMS);
}
