import { Component } from '@angular/core';
import { InputValues } from './input-values';

@Component({
    selector: 'fib-calc',
    template: '<button (click)="cal_fib()">Execute!</button>',
})

export class FibCalcComponent {

    ivalue = InputValues;

    public Range: number

    cal_fib() {

        this.Range = this.ivalue.High - this.ivalue.Low

        if (this.ivalue.type === 'Long') {

            this.ivalue.result_236 = ((this.Range * 0.764) + this.ivalue.Low).toFixed(5)
            this.ivalue.result_382 = ((this.Range * 0.618) + this.ivalue.Low).toFixed(5)
            this.ivalue.result_50 = ((this.Range * 0.50) + this.ivalue.Low).toFixed(5)
            this.ivalue.result_618 = ((this.Range * 0.382) + this.ivalue.Low).toFixed(5)
        }
        if (this.ivalue.type === 'Short') {

            this.ivalue.result_236 = (this.ivalue.High - (this.Range * 0.764)).toFixed(5)
            this.ivalue.result_382 = (this.ivalue.High - (this.Range * 0.618)).toFixed(5)
            this.ivalue.result_50 = (this.ivalue.High - (this.Range * 0.50)).toFixed(5)
            this.ivalue.result_618 = (this.ivalue.High - (this.Range * 0.382)).toFixed(5)

        }
    };

}
