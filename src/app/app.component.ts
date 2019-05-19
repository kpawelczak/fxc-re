import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public showFibo: boolean = false;
	public showPivot: boolean = false;
	public showTechnicals: boolean = false;
	public showResults: boolean = false;

	private technicalsCheckedFibo: boolean;
	private technicalsCheckedPivot: boolean;

	public high;
	public low;
	public type;
	public open;
	public close;

	public fiboResults: Array<string>;
	public pivotResults: Array<string>;

	fiboChecked(data) {
		this.showFibo = data;
	}

	pivotChecked(data) {
		this.showPivot = data;
	}

	technicalsChecked(data) {
		this.showTechnicals = data;
	}

	showResultsCalc(data) {
		this.showResults = data;
	}

	techBtnChecked() {

		if (!this.showTechnicals) {
			this.technicalsCheckedFibo = this.showFibo;
			this.technicalsCheckedPivot = this.showPivot;
		}
	}

	setHighFromInput(DataHigh) {
		this.high = DataHigh;
	}

	setLowFromInput(DataLow) {
		this.low = DataLow;
	}

	setTypeFromInput(DataType) {
		this.type = DataType;
	}

	setOpenFromInput(DataOpen) {
		this.open = DataOpen;
	}

	setCloseFromInput(DataClose) {
		this.close = DataClose;
	}

	appCalculatorFiboResults(data) {
		this.fiboResults = data;
	}

	appCalculatorPivotResults(data) {
		this.pivotResults = data;
	}
}
