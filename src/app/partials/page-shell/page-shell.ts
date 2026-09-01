import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { breadcrumbsFor, SitePageId, SITE_PAGES } from '../../config/site-map';
import { SecondaryHero } from '../hero/secondary-hero/secondary-hero';

@Component({
    imports: [RouterLink, SecondaryHero],
    selector: 'app-page-shell',
    styleUrl: './page-shell.scss',
    templateUrl: './page-shell.html',
    standalone: true
})
export class PageShell {
    public readonly pageId = input.required<SitePageId>();

    public readonly page = computed(() => SITE_PAGES[this.pageId()]);

    public readonly children = computed(() => Object.values(SITE_PAGES)
        .filter((page) => page.parent === this.pageId()));

    public readonly hero = computed(() => ({
        breadcrumbs: breadcrumbsFor(this.pageId()),
        description: this.page().summary,
        title: this.page().label
    }));
}
