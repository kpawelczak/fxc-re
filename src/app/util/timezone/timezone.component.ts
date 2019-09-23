import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
	selector: 'app-timezone',
	templateUrl: './timezone.component.html'
})
export class TimezoneComponent implements OnInit {
	clock = new Date();
	timeIndicator: number = (this.clock.getHours() * 4.17 + this.clock.getMinutes() * 0.0695);

	ngOnInit() {
		interval(1000).subscribe(
			() => {
				this.clock = new Date();
				let hours = this.clock.getHours(),
					minutes = this.clock.getMinutes();

				this.timeIndicator = (hours * 4.17 + minutes * 0.0695);
			}
		);

	}

}
