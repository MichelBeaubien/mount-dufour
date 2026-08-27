export interface OperatingDay {
    openTime: string | null;
    closeTime: string | null;
    day: string;
    isOpen: boolean;
}

export interface OperatingHoursData {
    callAheadMessage: string;
    phone: string;
    schedule: OperatingDay[];
    weatherMessage: string;
}
