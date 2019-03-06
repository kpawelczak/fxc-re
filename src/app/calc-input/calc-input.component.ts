import { Component, OnInit } from '@angular/core';

import { Pos } from './pos'
import { PosService } from '../pos.service';

@Component({
    selector: 'calc-input',
    templateUrl: './calc-input.component.html',
    styleUrls: ['./calc-input.component.scss']
})
export class CalcInputComponent implements OnInit {

    positions: Pos[];
    constructor(private posService: PosService) { }

    ngOnInit() {
        this.getPositions();
    }

    getPositions(): void {
        this.posService.getPositions()
            .subscribe(positions => this.positions = positions);
    }

    add(
        size: number,
        price: number,
        type: string,
        // pipsloss: string,
        loss: number,
        // pipswin: string,
        profit: number
    ): void {

        if (!price) { return; }
        if (!size) { return; }


        this.posService.addPos({ price, loss, type, profit, size } as Pos)
            .subscribe(pos => {
                this.positions.push(pos);
            });

    }

    public price: number
    public takeprofit: number
    public stoploss: number
    public profit: number
    public type: string    
    public loss: number


    pos_calc() {

        if (this.takeprofit > this.price) {
            this.type = "buy"
            this.profit = this.takeprofit - this.price
            this.loss = this.price - this.stoploss
        }

        if (this.takeprofit < this.price) {
            this.type = "sell"
            this.profit = this.price - this.takeprofit
            this.loss = this.stoploss - this.price
        }
    }

}
