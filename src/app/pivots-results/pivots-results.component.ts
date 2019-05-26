import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'pivots-results',
	templateUrl: './pivots-results.component.html',
	styleUrls: ['./pivots-results.component.scss']
})
export class PivotsResultsComponent implements OnInit {

	@Input()
	pivotResults: Array<string>;

	ngOnInit() {
		if (this.pivotResults === undefined) {
			return this.pivotResults = ['0', '0', '0', '0', '0', '0', '0'];
		}
	}
}
