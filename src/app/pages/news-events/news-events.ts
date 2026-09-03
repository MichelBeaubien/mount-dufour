import { Component, computed, signal } from '@angular/core';
import { NEWS_EVENTS } from '../../data/news-events.data';
import { HeroOptions } from '../../interfaces/hero';
import { NewsEvent } from '../../interfaces/news';
import { PrimaryHero } from '../../partials/hero/primary-hero/primary-hero';
import { SectionTitle } from '../../partials/section-title/section-title';

@Component({
    imports: [
        PrimaryHero,
        SectionTitle
    ],
    selector: 'app-news-events',
    styleUrl: './news-events.scss',
    templateUrl: './news-events.html',
    standalone: true
})
export class NewsEvents {
    public readonly events = computed<NewsEvent[]>(() => this.items().filter((item) => item.type === 'event'));

    public readonly hero = computed<HeroOptions>(() => ({
        description: 'Stay connected with what’s happening at Mount Dufour, from upcoming events to the latest mountain news.',
        image: '/assets/images/shared/heroes/mountain.jpg',
        kicker: 'What’s Happening',
        kickerIcon: 'fa-calendar-days',
        title: 'News &',
        titleSpan: 'Events.',
        scrollTo: {
            href: 'news-events-intro',
            label: 'Explore News & Events'
        }
    }));

    public readonly news = computed<NewsEvent[]>(() => this.items().filter((item) => item.type === 'news'));

    private readonly items = signal<NewsEvent[]>(NEWS_EVENTS);
}
