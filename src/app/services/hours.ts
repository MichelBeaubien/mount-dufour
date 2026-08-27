import { computed, Service, signal } from '@angular/core';
import { HOURS_DATA } from '../data/hours.data';
import { OperatingDay, OperatingHoursData } from '../interfaces/hours';

@Service()
export class HoursService {
    public readonly callAheadMessage = computed<string>(() => this.data().callAheadMessage);

    public readonly phone = computed<string>(() => this.data().phone);

    public readonly schedule = computed<OperatingDay[]>(() => this.data().schedule);

    public readonly weatherMessage = computed<string>(() => this.data().weatherMessage);

    private readonly data = signal<OperatingHoursData>(HOURS_DATA);

    public formatHours(day: OperatingDay): string {
        if (!day.isOpen || !day.openTime || !day.closeTime) {
            return 'Closed';
        }

        return `${this.formatTime(day.openTime)} - ${this.formatTime(day.closeTime)}`;
    }

    private formatTime(time: string): string {
        const [hourValue, minuteValue] = time.split(':');
        const hour = Number(hourValue);
        const minute = Number(minuteValue);
        const period = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;

        return `${formattedHour}:${minute.toString().padStart(2, '0')} ${period}`;
    }
}
