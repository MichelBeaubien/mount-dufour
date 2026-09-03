export type NewsEventType = 'event' | 'news';

export interface NewsEvent {
    date: string;
    description: string;
    image: string;
    title: string;
    type: NewsEventType;
    url?: string;
}
