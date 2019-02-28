import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'fib-calc',
    template: '<button gui-button (click)="cal_fib()">Execute!</button><button gui-button (click)="setShow()">show</button>'
})

export class FibCalcComponent {

    @Input() public High
    @Input() public Low
    @Input() public type

    @Output() setShowCalc: EventEmitter<boolean> = new EventEmitter();

    @Output() set236: EventEmitter<string> = new EventEmitter();
    @Output() set382: EventEmitter<string> = new EventEmitter();
    @Output() set50: EventEmitter<string> = new EventEmitter();
    @Output() set618: EventEmitter<string> = new EventEmitter();
    
    public result_236: string;
    public result_382: string;
    public result_50: string;
    public result_618: string;

    public show: boolean

    public Range: number;

    setShow(){
        this.show=!this.show
        this.setShowCalc.emit(this.show)        
    }

    cal_fib() {

        this.Range = this.High - this.Low

        if (this.type === 'Long') {

            this.result_236 = "=" + " " + ((this.Range * 0.764) + this.Low).toFixed(5)
            this.result_382 = "=" + " " + ((this.Range * 0.618) + this.Low).toFixed(5)
            this.result_50 = "=" + " " + ((this.Range * 0.50) + this.Low).toFixed(5)
            this.result_618 = "=" + " " + ((this.Range * 0.382) + this.Low).toFixed(5)

        }

        if (this.type === 'Short') {

            this.result_236 = "=" + " " + (this.High - (this.Range * 0.764)).toFixed(5)
            this.result_382 = "=" + " " + (this.High - (this.Range * 0.618)).toFixed(5)
            this.result_50 = "=" + " " + (this.High - (this.Range * 0.50)).toFixed(5)
            this.result_618 = "=" + " " + (this.High - (this.Range * 0.382)).toFixed(5)

        }

        this.set236.emit(this.result_236)
        this.set382.emit(this.result_382)
        this.set50.emit(this.result_50)
        this.set618.emit(this.result_618)
                
    };

}
