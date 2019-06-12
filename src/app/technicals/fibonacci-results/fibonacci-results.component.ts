import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'fibonacci-results',
	templateUrl: './fibonacci-results.component.html',
	styleUrls: ['./fibonacci-results.component.scss']
})
export class FibonacciResultsComponent implements OnInit {

	@Input()
	fiboResults: Array<string>;

	ngOnInit() {
		if (this.fiboResults === undefined) {
			return this.fiboResults = ['0', '0', '0', '0'];
		}
	}
}
