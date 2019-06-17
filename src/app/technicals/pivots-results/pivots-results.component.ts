import { Component, Input } from '@angular/core';

@Component({
	selector: 'pivots-results',
	templateUrl: './pivots-results.component.html',
	styleUrls: ['./pivots-results.component.scss']
})
export class PivotsResultsComponent {

	@Input()
	pivotResults: Array<number>;
}
