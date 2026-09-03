import { computed, Service, signal } from '@angular/core';
import { DOCUMENTS } from '../data/document.data';
import { DocumentGroup } from '../interfaces/document';

@Service()
export class DocumentService {
    public readonly documents = computed<DocumentGroup[]>(() => this.data());

    private readonly data = signal<DocumentGroup[]>(DOCUMENTS);
}
