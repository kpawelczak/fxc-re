import { Component } from '@angular/core';

@Component({
    selector: 'calc-input',
    templateUrl: './calc-input.component.html',
    styleUrls: ['./calc-input.component.scss']
})
export class CalcInputComponent {

    public price: number
    public takeprofit: number
    public stoploss: number
    public result

    pos_calc() {

        if (this.takeprofit > this.price) {
            this.result = "buy" + " " + (this.takeprofit - this.price)

        }
        if (this.takeprofit < this.price) {
            this.result = "sell" + " " + (this.price - this.takeprofit)
        }
        if (this.takeprofit === this.price) {
            this.result = " Invalid position "
        }
    }

}
