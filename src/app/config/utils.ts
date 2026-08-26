import { MountainStatus } from '../interfaces/mountain';

export function getStatusLabel(status: MountainStatus): string {
    switch (status) {
        case 'open':
            return 'Open';

        case 'hold':
            return 'On Hold';

        case 'closed':
        default:
            return 'Closed';
    }
}
