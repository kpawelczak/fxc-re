import { Component, OnInit } from '@angular/core';

import { PositionDataTable } from '../position-data-table/position-data-table';
import { PositionDataService } from '../position-data-table/position-data.service';

@Component({
	selector: 'positions-table',
	templateUrl: './positions-table.component.html',
	styleUrls: ['./positions-table.component.scss']
})
export class PositionsTableComponent implements OnInit {

	positions: PositionDataTable[];

	public price: number;
	public takeprofit: number;
	public stoploss: number;
	public profit: string;
	public type: string;
	public loss: number;

	constructor(private positionDataService: PositionDataService) {
	}

	ngOnInit() {
		this.getPositions();
	}

	getPositions(): void {
		this.positionDataService.getPositions()
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

		if (!price) {
			return;
		}
		if (!size) {
			return;
		}

		this.positionDataService.addPos({ price, loss, type, profit, size } as PositionDataTable)
			.subscribe(pos => {
				this.positions.push(pos);
			});
	}

	pos_calc() {

		if (this.takeprofit > this.price) {
			this.type = 'buy';
			this.profit = ((this.takeprofit - this.price) * 10000).toFixed(0);
			this.loss = (this.price - this.stoploss) * 100;
		}

		if (this.takeprofit < this.price) {
			this.type = 'sell';
			this.profit = ((this.price - this.takeprofit) * 10000).toFixed(0);
			this.loss = (this.stoploss - this.price) * 100;
		}
	}
}
