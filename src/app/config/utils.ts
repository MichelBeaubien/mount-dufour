import { MountainStatus } from '../interfaces/mountain';

export function getStatusLabel(status: MountainStatus): string {
    switch (status) {
        case 'open':
            return 'Open';
        case 'hold':
            return 'On Hold';
        case 'opening-soon':
            return 'Opening Soon';
        case 'closed':
        default:
            return 'Closed';
    }
}

export function getStatusClassName(status: MountainStatus): string {
    switch (status) {
        case 'open':
            return 'is-open';
        case 'hold':
            return 'is-hold';
        case 'opening-soon':
            return 'is-opening-soon';
        case 'closed':
        default:
            return 'is-closed';
    }
}
