import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './global/footer/footer';
import { Header } from './global/header/header';

@Component({
    imports: [RouterOutlet, Header, Footer],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
    standalone: true
})
export class App {
    protected readonly title = signal('mount-dufour');
}
