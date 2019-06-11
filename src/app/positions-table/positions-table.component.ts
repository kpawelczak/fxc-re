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
		profit: number,
		stopLoss: number,
		takeProfit: number): void {

		if (!price || !size || !takeProfit || !stopLoss) {
			return;
		}

		if (price < 0 || size < 0 || takeProfit < 0 || stopLoss < 0) {
			return;
		}

		this.id++;
		this.isTableHidden = false;
		this.positionDataService.insertPosition({ id, type, size, price, loss, profit } as Position);
	}

	positionCalculate(price: number, stopLoss: number, takeProfit: number): void {

		if (takeProfit > price) {
			this.type = 'buy';
			this.profit = Math.floor((takeProfit - price) * 10000);
			this.loss = Math.floor((price - stopLoss) * 10000);
		}

		if (takeProfit < price) {
			this.type = 'sell';
			this.profit = Math.floor((price - takeProfit) * 10000);
			this.loss = Math.floor((stopLoss - price) * 10000);
		}

		if (takeProfit === price) {
			this.type = '-';
			this.profit = 0;
			this.loss = 0;
		}
	}

	update(event: Event, position: Position): void {
		event.preventDefault();

		this.positionCalculate(position.price, this.stopLoss, this.takeProfit);

		this.positionDataService.updatePosition(position);
		console.log(this.profit);

	}

	delete(position: Position): void {
		this.positionDataService.deletePosition(position);
	}

	clear() {
		this.id = 1;
		this.isTableHidden = true;
		this.positionDataService.clearPositions();
	}

}
