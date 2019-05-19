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

	private id: number = 1;
	private type: string;
	private size: number;
	private price: number;
	private loss: number;
	private profit: number;
	private takeProfit: number;
	private stopLoss: number;
	private isTableHidden: boolean = true;

	constructor(private positionDataService: PositionDataService) {
	}

	ngOnInit() {
		this.getPositions();
	}

	getPositions(): void {
		this.positionDataService.getPositions()
			.subscribe(positions => this.positions = positions);
	}

	addPositionToTable(
		id: number,
		type: string,
		size: number,
		price: number,
		loss: number,
		profit: number): void {

		if (!this.price || !this.size || !this.price || !this.stopLoss) {
			return;
		}

		if (this.price < 0 || this.size < 0 || this.price < 0 || this.stopLoss < 0) {
			return;
		}

		this.id++;
		this.isTableHidden = false;
		this.positionDataService.insertPosition({ id, type, size, price, loss, profit } as Position);
	}

	pos_calc() {

		if (this.takeProfit > this.price) {
			this.type = 'buy';
			this.profit = Math.floor((this.takeProfit - this.price) * 10000);
			this.loss = Math.floor((this.price - this.stopLoss) * 10000);
		}

		if (this.takeProfit < this.price) {
			this.type = 'sell';
			this.profit = Math.floor((this.price - this.takeProfit) * 10000);
			this.loss = Math.floor((this.stopLoss - this.price) * 10000);
		}

		if (this.takeProfit === this.price) {
			this.type = '-';
			this.profit = 0;
			this.loss = 0;
		}
	}
}
