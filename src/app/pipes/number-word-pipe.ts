import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberWord',
    standalone: true
})
export class NumberWordPipe implements PipeTransform {
    private readonly words: Record<string, string> = {
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten'
    };

    public transform(value: string | number): string {
        return this.words[String(value)] ?? String(value);
    }
}
