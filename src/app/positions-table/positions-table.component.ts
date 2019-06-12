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
	private moneyLoss: number;
	private moneyProfit: number;
	private isTableHidden: boolean = true;

	constructor(private positionDataService: PositionDataService) {
	}

	ngOnInit() {
		this.getPositions();
	}

	private getPositions(): void {
		this.positionDataService.getPositions()
			.subscribe(positions => this.positions = positions);
	}

	private addPositionToTable(
		id: number,
		type: string,
		size: number,
		price: number,
		loss: number,
		profit: number,
		stopLoss: number,
		takeProfit: number,
		moneyLoss: number,
		moneyProfit: number): void {

		if (!price || !size || !takeProfit || !stopLoss) {
			return;
		}

		if (price < 0 || size < 0 || takeProfit < 0 || stopLoss < 0) {
			return;
		}

		this.id++;
		this.isTableHidden = false;
		this.positionDataService
			.insertPosition({
				id,
				type,
				size,
				price,
				loss,
				profit,
				stopLoss,
				takeProfit,
				moneyLoss,
				moneyProfit
			} as Position);
	}

	private calculate(price: number, stopLoss: number, takeProfit: number, size: number): void {

		const decimal = 10000;

		if (takeProfit > price) {
			this.type = 'buy';
			this.profit = Math.round((takeProfit - price) * decimal);
			this.loss = Math.round((price - stopLoss) * decimal);
		}

		if (takeProfit < price) {
			this.type = 'sell';
			this.profit = Math.round((price - takeProfit) * decimal);
			this.loss = Math.round((stopLoss - price) * decimal);
		}

		if (takeProfit === price) {
			this.type = '-';
			this.profit = 0;
			this.loss = 0;
		}

		this.moneyLoss = this.loss * size;
		this.moneyProfit = this.profit * size;
	}

	private update(event: Event, position: Position): void {
		event.preventDefault();

		this.calculate(position.price, position.stopLoss, position.takeProfit, position.size);
		position.profit = this.profit;
		position.loss = this.loss;
		position.type = this.type;
		position.moneyLoss = this.moneyLoss;
		position.moneyProfit = this.moneyProfit;

		this.positionDataService.updatePosition(position);
	}

	private delete(position: Position): void {
		this.positionDataService.deletePosition(position);
	}

	private clear() {
		this.id = 1;
		this.isTableHidden = true;
		this.positionDataService.clearPositions();
	}

}
