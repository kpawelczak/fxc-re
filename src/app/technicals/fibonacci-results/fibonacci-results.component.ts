import { Component, Input } from '@angular/core';

@Component({
	selector: 'fibonacci-results',
	templateUrl: './fibonacci-results.component.html',
	styleUrls: ['./fibonacci-results.component.scss']
})
export class FibonacciResultsComponent {

	@Input()
	fiboResults: Array<number>;
}
