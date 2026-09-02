import {
    LessonBooking,
    LessonTime,
    SnowSchoolInfo,
    SnowSchoolInstructorFeature,
    SnowSchoolPackage
} from '../interfaces/snow-school';

export const SNOW_SCHOOL_PACKAGES: SnowSchoolPackage[] = [
    {
        label: 'Discover Skiing or Snowboarding',
        description: 'A complete introduction for new skiers and snowboarders.',
        icon: 'fas fa-mountain-sun',
        price: 90,
        features: [
            '1-hour private lesson',
            'Rental equipment included',
            '1-hour lift ticket during the lesson'
        ]
    },
    {
        label: 'Private Lesson',
        description: 'One-on-one instruction customized to your ability and goals.',
        icon: 'fas fa-person-skiing',
        price: 60,
        features: [
            '1-hour private lesson',
            '$15 beginner lift ticket',
            '$25 chairlift upgrade available if needed'
        ]
    }
];

export const LESSON_TIMES: LessonTime[] = [
    {
        start: '10:00 AM',
        end: '11:00 AM'
    },
    {
        start: '11:15 AM',
        end: '12:15 PM'
    },
    {
        start: '12:30 PM',
        end: '1:30 PM'
    },
    {
        start: '1:45 PM',
        end: '2:45 PM'
    }
];

export const SNOW_SCHOOL_INFO: SnowSchoolInfo[] = [
    {
        icon: 'fas fa-user',
        label: 'Private Lessons',
        value: 'Lessons are one-on-one. Group lessons are not currently available.'
    },
    {
        icon: 'fas fa-child-reaching',
        label: 'Ages 5+',
        value: 'Participants must be at least 5 years old.'
    },
    {
        icon: 'fas fa-calendar-days',
        label: 'Weekends Only',
        value: 'Lessons are currently offered Saturday and Sunday.'
    },
    {
        icon: 'fas fa-clock',
        label: 'Booking Deadline',
        value: 'Weekend lesson bookings close Friday at 12:00 PM.'
    }
];

export const SNOW_SCHOOL_INSTRUCTORS: SnowSchoolInstructorFeature = {
    description: 'Mount Dufour instructors are certified with a minimum Level 1 through the Canadian Ski Instructors Alliance and/or the Canadian Association of Snowboard Instructors.',
    kicker: 'Certified Instruction',
    title: 'Learn With Confidence'
};

export const LESSON_BOOKING: LessonBooking = {
    description: 'Lesson requests must include the participant’s name, age, skill level, requested date and time, rental needs and a contact phone number.',
    email: 'dufour@bellnet.ca',
    kicker: 'Reserve Your Lesson',
    title: 'Ready to Learn?'
};
