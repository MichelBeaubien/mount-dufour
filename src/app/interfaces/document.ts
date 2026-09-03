export interface Document {
    description: string;
    file: string;
    title: string;
}

export interface DocumentGroup {
    documents: Document[];
    icon: string;
    title: string;
}
