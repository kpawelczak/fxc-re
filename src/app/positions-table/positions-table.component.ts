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
		takeProfit: number): void {

		if (!price || !size || !takeProfit || !stopLoss) {
			return;
		}

		if (price < 0 || size < 0 || takeProfit < 0 || stopLoss < 0) {
			return;
		}

		this.id++;
		this.isTableHidden = false;
		this.positionDataService.insertPosition({ id, type, size, price, loss, profit, stopLoss, takeProfit } as Position);
	}

	private calculate(price: number, stopLoss: number, takeProfit: number): void {

		const _price = price * 1,
			_takeProfit = takeProfit * 1,
			_stopLoss = stopLoss * 1;

		if (_takeProfit > _price) {
			this.type = 'buy';
			this.profit = Math.floor((_takeProfit - _price) * 10000);
			this.loss = Math.floor((_price - _stopLoss) * 10000);
		}

		if (_takeProfit < _price) {
			this.type = 'sell';
			this.profit = Math.floor((_price - _takeProfit) * 10000);
			this.loss = Math.floor((_stopLoss - _price) * 10000);
		}

		if (_takeProfit === _price) {
			this.type = '-';
			this.profit = 0;
			this.loss = 0;
		}
	}

	private update(event: Event, position: Position): void {
		event.preventDefault();

		this.calculate(position.price, position.stopLoss, position.takeProfit);
		position.profit = this.profit;
		position.loss = this.loss;
		position.type = this.type;

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
