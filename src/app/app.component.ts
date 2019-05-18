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

	public High;
	public Low;
	public type;
	public Open;
	public Close;

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
		this.High = DataHigh;
	}

	setLowFromInput(DataLow) {
		this.Low = DataLow;
	}

	setTypeFromInput(DataType) {
		this.type = DataType;
	}

	setOpenFromInput(DataOpen) {
		this.Open = DataOpen;
	}

	setCloseFromInput(DataClose) {
		this.Close = DataClose;
	}

	appCalculatorFiboResults(data) {
		this.fiboResults = data;
	}

	appCalculatorPivotResults(data) {
		this.pivotResults = data;
	}
}
