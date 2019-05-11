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

	public High: string;
	public Low: string;
	public type: string;
	public Open: string;
	public Close: string;

	onChangeHigh() {
		this.setHigh.emit(this.High);
	}

	onChangeLow() {
		this.setLow.emit(this.Low);
	}

	onChangeType() {
		this.setType.emit(this.type);
	}

	selectedOptionFromInput(DataType) {
		this.type = DataType;
	}

	onChangeOpen() {
		this.setOpen.emit(this.Open);
	}

	onChangeClose() {
		this.setClose.emit(this.Close);
	}
}
