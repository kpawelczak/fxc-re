import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

	positionsActive: boolean = false;

	private routerSubscription: Subscription;

	constructor(private router: Router) {
	}

	ngOnInit(): void {
		this.routerSubscription =
			this.router.events
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

	ngOnDestroy() {
		this.routerSubscription.unsubscribe();
	}

}
