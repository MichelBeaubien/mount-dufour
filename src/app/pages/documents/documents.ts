import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../config/site-map';
import { HeroOptions } from '../../interfaces/hero';
import { SecondaryHero } from '../../partials/hero/secondary-hero/secondary-hero';
import { SectionTitle } from '../../partials/section-title/section-title';
import { DocumentService } from '../../services/document';

@Component({
    imports: [
        SecondaryHero,
        RouterLink,
        SectionTitle
    ],
    providers: [
        DocumentService
    ],
    selector: 'app-documents',
    styleUrl: './documents.scss',
    templateUrl: './documents.html',
    standalone: true
})
export class Documents {
    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Find Mount Dufour forms, registrations and important information in one convenient place.',
        image: '/assets/images/heros/documents.jpg',
        kicker: 'Forms & Information',
        title: 'Documents'
    }));

    public readonly pages = SITE_PAGES;

    public readonly documentService = inject(DocumentService);
}
