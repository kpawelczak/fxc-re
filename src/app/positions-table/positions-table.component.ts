import { Component, OnInit } from '@angular/core';

import { Position } from './position-data/position';
import { PositionDataService } from './position-data/position-data.service';

@Component({
	selector: 'positions-table',
	templateUrl: './positions-table.component.html',
	styleUrls: ['./positions-table.component.scss'],
	providers: [PositionDataService]
})
export class PositionsTableComponent implements OnInit {

	positions: Position[];

	public price: number;
	public takeProfit: number;
	public stopLoss: number;
	public profit: number;
	public type: string;
	public loss: number;
	public size: number;

	constructor(private positionDataService: PositionDataService) {
	}

	ngOnInit() {
		this.getPositions();
	}

	getPositions(): void {
		this.positionDataService.getPositions()
			.subscribe(positions => this.positions = positions);
	}

	addPositionToTable(size: number, price: number, type: string, loss: number, profit: number): void {

		if (!price || !size || !price) {
			return;
		}
		this.positionDataService.addPosition({ price, loss, type, profit, size } as Position);
	}

	pos_calc() {

		if (this.takeProfit > this.price) {
			this.type = 'buy';
			this.profit = ((this.takeProfit - this.price) * 10000);
			this.loss = Math.floor((this.price - this.stopLoss) * 100);
		}

		if (this.takeProfit < this.price) {
			this.type = 'sell';
			this.profit = Math.floor((this.price - this.takeProfit) * 10000);
			this.loss = Math.floor((this.stopLoss - this.price) * 100);
		}

		if (this.takeProfit === this.price) {
			this.type = '-';
			this.profit = 0;
			this.loss = 0;
		}
	}
}
