import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_PAGES } from '../../config/site-map';

@Component({
    imports: [RouterLink],
    selector: 'app-not-found',
    styleUrl: './not-found.scss',
    templateUrl: './not-found.html',
    standalone: true
})
export class NotFound {
    public readonly pages = SITE_PAGES;
}
