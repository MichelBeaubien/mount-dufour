import { DocumentGroup } from '../interfaces/document';

export const DOCUMENTS: DocumentGroup[] = [
    {
        documents: [
            {
                description: 'Membership information and registration form for the upcoming ski season.',
                file: '/assets/documents/membership-form.pdf',
                title: 'Membership Form'
            },
            {
                description: 'Information for families registering for a Mount Dufour membership.',
                file: '/assets/documents/family-membership-form.pdf',
                title: 'Family Membership Form'
            }
        ],
        icon: 'fa-id-card',
        title: 'Membership'
    },
    {
        documents: [
            {
                description: 'Registration information for Mount Dufour Snow School programs.',
                file: '/assets/documents/snow-school-registration.pdf',
                title: 'Snow School Registration'
            }
        ],
        icon: 'fa-person-skiing',
        title: 'Snow School'
    },
    {
        documents: [
            {
                description: 'Important information, policies and forms for Mount Dufour visitors and participants.',
                file: '/assets/documents/general-information.pdf',
                title: 'General Information'
            }
        ],
        icon: 'fa-file-lines',
        title: 'General'
    }
];
