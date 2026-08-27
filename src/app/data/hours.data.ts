import { OperatingHoursData } from '../interfaces/hours';

export const HOURS_DATA: OperatingHoursData = {
    callAheadMessage: 'Travelling from out of town? Please call ahead to confirm current operating status.',
    phone: '705-848-6655',
    schedule: [
        {
            closeTime: null,
            day: 'Monday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Tuesday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Wednesday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Thursday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Friday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Saturday',
            isOpen: false,
            openTime: null
        },
        {
            closeTime: null,
            day: 'Sunday',
            isOpen: false,
            openTime: null
        }
    ],
    weatherMessage: 'Mount Dufour operations are weather permitting. Unfavourable conditions may result in delayed opening or closure.'
};
