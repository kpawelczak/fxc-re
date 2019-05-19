import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'technicals',
	templateUrl: './technicals.component.html',
	styleUrls: ['./technicals.component.scss']
})
export class TechnicalsComponent {

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

	onChangeHigh() {
		this.setHigh.emit(this.high);
	}

	onChangeLow() {
		this.setLow.emit(this.low);
	}

	onChangeType() {
		this.setType.emit(this.type);
	}

	selectedOptionFromInput(DataType) {
		this.type = DataType;
	}

	onChangeOpen() {
		this.setOpen.emit(this.open);
	}

	onChangeClose() {
		this.setClose.emit(this.close);
	}
}
