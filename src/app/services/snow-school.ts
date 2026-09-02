import { computed, Service, signal } from '@angular/core';
import {
    LESSON_BOOKING,
    LESSON_TIMES,
    SNOW_SCHOOL_INFO,
    SNOW_SCHOOL_INSTRUCTORS,
    SNOW_SCHOOL_PACKAGES
} from '../data/snow-school.data';
import { LessonTime, SnowSchoolInfo, SnowSchoolPackage } from '../interfaces/snow-school';

@Service()
export class SnowSchoolService {
    public readonly booking = signal(LESSON_BOOKING);

    public readonly info = signal<SnowSchoolInfo[]>(SNOW_SCHOOL_INFO);

    public readonly instructors = signal(SNOW_SCHOOL_INSTRUCTORS);

    public readonly lessonTimes = signal<LessonTime[]>(LESSON_TIMES);

    public readonly packages = computed<SnowSchoolPackage[]>(() => this.data());

    private readonly data = signal<SnowSchoolPackage[]>(SNOW_SCHOOL_PACKAGES);
}
