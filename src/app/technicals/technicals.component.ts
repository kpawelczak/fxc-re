import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'technicals',
	templateUrl: './technicals.component.html',
	styleUrls: ['./technicals.component.scss']
})
export class TechnicalsComponent implements OnInit {

	@Input()
	public fiboChecked;

	@Input()
	public pivotChecked;



	@Output()
	setHigh: EventEmitter<string> = new EventEmitter();

	@Output()
	setLow: EventEmitter<string> = new EventEmitter();

	@Output()
	setType: EventEmitter<string> = new EventEmitter();

	@Output()
	setOpen: EventEmitter<string> = new EventEmitter();

	@Output()
	setClose: EventEmitter<string> = new EventEmitter();

	public high: string;
	public low: string;
	public type: string;
	public open: string;
	public close: string;
	private selected: string = 'Long';

	ngOnInit() {
		this.setSelectedOption();
	}



	@Output()
	inputChanged: EventEmitter<Array<string>> = new EventEmitter();

	private inputValues: Array<string> = [];


	inputFilled() {

		this.inputValues= [
			this.high,
			this.low,
			this.type,
			this.open,
			this.close
		];

		this.inputChanged.emit(this.inputValues)
	}


	onChangeHigh() {
		this.setHigh.emit(this.high);
	}

	onChangeLow() {
		this.setLow.emit(this.low);
	}

	onChangeType() {
		this.setType.emit(this.type);
	}

	getSelectedOption(type) {
		this.type = type;
	}

	setSelectedOption() {
		this.setType.emit(this.selected);
	}

	onChangeOpen() {
		this.setOpen.emit(this.open);
	}

	onChangeClose() {
		this.setClose.emit(this.close);
	}
}
