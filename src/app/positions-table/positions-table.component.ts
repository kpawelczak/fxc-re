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

	id: number = 1;
	type: string;
	size: number;
	price: number;
	loss: number;
	profit: number;
	takeProfit: number;
	stopLoss: number;
	moneyLoss: number;
	moneyProfit: number;
	totalLoss: number;
	totalProfit: number;
	totalMoneyProfit: number;
	totalMoneyLoss: number;
	isTableHidden: boolean = true;

	constructor(private positionDataService: PositionDataService) {
	}

	ngOnInit() {
		this.getPositions();
	}

	private getPositions(): void {
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
		this.calculateTotals();
	}

	calculate(price: number, stopLoss: number, takeProfit: number, size: number): void {

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

	update(event: Event, position: Position): void {
		event.preventDefault();

		this.calculate(position.price, position.stopLoss, position.takeProfit, position.size);
		position.profit = this.profit;
		position.loss = this.loss;
		position.type = this.type;
		position.moneyLoss = this.moneyLoss;
		position.moneyProfit = this.moneyProfit;

		this.positionDataService.updatePosition(position);
		this.calculateTotals();
	}

	delete(position: Position): void {
		this.positionDataService.deletePosition(position);
		this.calculateTotals();
	}

	clear(): void {
		this.id = 1;
		this.isTableHidden = true;
		this.positionDataService.clearPositions();
		this.calculateTotals();
	}

	calculateTotals(): void {

		this.totalProfit = 0;
		this.totalLoss = 0;
		this.totalMoneyProfit = 0;
		this.totalMoneyLoss = 0;

		for (let i = 0; i < this.positions.length; i++) {
			this.totalLoss += this.positions[i].loss;
		}
		for (let i = 0; i < this.positions.length; i++) {
			this.totalProfit += this.positions[i].profit;
		}
		for (let i = 0; i < this.positions.length; i++) {
			this.totalMoneyProfit += this.positions[i].moneyProfit;
		}
		for (let i = 0; i < this.positions.length; i++) {
			this.totalMoneyLoss += this.positions[i].moneyLoss;
		}

	}
}
