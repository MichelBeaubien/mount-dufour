import { Content, Info } from './common';

export type SnowSchoolInfo = Info;

export type SnowSchoolInstructorFeature = Content;

export interface LessonBooking extends Content {
    email: string;
}

export interface LessonTime {
    end: string;
    start: string;
}

export interface SnowSchoolPackage {
    description: string;
    features: string[];
    icon: string;
    label: string;
    price: number;
}
