import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fib-input',
    templateUrl: './fib-input.component.html',
    styleUrls: ['./fib-input.component.css'],
})

export class FibInputComponent {

    public High: string
    public Low: string
    public type: string

    @Output() setHigh: EventEmitter<string> = new EventEmitter();
    @Output() setLow: EventEmitter<string> = new EventEmitter();
    @Output() setType: EventEmitter<string> = new EventEmitter();

    onChangeHigh() {
        this.setHigh.emit(this.High);
    }

    onChangeLow() {
        this.setLow.emit(this.Low);
    }

    onChangeType() {
        this.setType.emit(this.type);
    }

}
