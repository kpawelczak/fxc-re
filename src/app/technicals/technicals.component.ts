import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'technicals',
	templateUrl: './technicals.component.html',
	styleUrls: ['./technicals.component.scss']
})
export class TechnicalsComponent implements OnInit {

	@Input()
	private fiboChecked: boolean;

	@Input()
	private pivotChecked: boolean;

	@Output()
	inputChanged: EventEmitter<Array<any>> = new EventEmitter();

	inputValues: Array<any> = [];
	private options: Array<string> = ['Long', 'Short'];
	private high: number;
	private low: number;
	private open: number;
	private close: number;
	private type: string;
	private selected: string = this.options[0];

	ngOnInit(): void {
		this.setSelectedOption();
	}

	formChanged(): void {
		this.inputValues = [
			this.high,
			this.low,
			this.open,
			this.close,
			this.type
		];
		this.inputChanged.emit(this.inputValues);
	}

	getSelectedOption(type): void {
		this.type = type;
	}

	setSelectedOption(): void {
		this.inputValues[4] = this.selected;
		this.inputChanged.emit(this.inputValues[4]);
	}
}
