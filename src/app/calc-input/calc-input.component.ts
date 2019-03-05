import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'calc-input',
    templateUrl: './calc-input.component.html',
    styleUrls: ['./calc-input.component.scss'],
})

export class CalcInputComponent {

    @Input() public fiboChecked
    @Input() public pivotChecked

    public High: string
    public Low: string
    public type: string
    public Open: string
    public Close: string

    @Output() setHigh: EventEmitter<string> = new EventEmitter();
    @Output() setLow: EventEmitter<string> = new EventEmitter();
    @Output() setType: EventEmitter<string> = new EventEmitter();
    @Output() setOpen: EventEmitter<string> = new EventEmitter();
    @Output() setClose: EventEmitter<string> = new EventEmitter();

    onChangeHigh() {
        this.setHigh.emit(this.High);
    }

    onChangeLow() {
        this.setLow.emit(this.Low);
    }

    onChangeType() {
        this.setType.emit(this.type);
    }

    onChangeOpen() {
        this.setOpen.emit(this.Open);
    }

    onChangeClose() {
        this.setClose.emit(this.Close);
    }

}
