import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	positionsActive: boolean = false;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		this.router
			.events
			.pipe(
				filter((event: any) => event instanceof NavigationEnd)
			)
			.subscribe(event => {
				if (event.url === '/' || event.url === '/positions') {
					this.positionsActive = true;
				} else {
					this.positionsActive = false;
				}
			});
	}

}
