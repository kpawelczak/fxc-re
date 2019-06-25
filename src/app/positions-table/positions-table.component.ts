import { Component, OnInit } from '@angular/core';

import { Position } from './position-data/position';
import { PositionDataService } from './position-data/position-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'positions-table',
	templateUrl: './positions-table.component.html',
	styleUrls: ['./positions-table.component.scss'],
	providers: [PositionDataService]
})
export class PositionsTableComponent implements OnInit {

	positions: Position[];

	positionForm: FormGroup;

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
	totalMoneyProfit: number = 0;
	totalMoneyLoss: number = 0;
	isTableHidden: boolean = true;

	constructor(private positionDataService: PositionDataService,
				private formBuilder: FormBuilder) {

		this.positionForm = this.formBuilder.group({
			'size': ['', [
				Validators.required,
				Validators.min(0.000001)]],
			'price': ['', [
				Validators.required,
				Validators.min(0.000001)]],
			'takeProfit': ['', [
				Validators.required,
				Validators.min(0.000001)]],
			'stopLoss': ['', [
				Validators.required,
				Validators.min(0.000001)]]
		});
	}

	ngOnInit() {
		this.getPositions();
	}

	addPosition(post) {
		this.size = post.size;
		this.price = post.price;
		this.takeProfit = post.takeProfit;
		this.stopLoss = post.stopLoss;

		this.calculate(this.price, this.stopLoss, this.takeProfit, this.size);
		this.sendPositionToTable(this.size, this.price, this.stopLoss, this.takeProfit);
	}

	sendPositionToTable(
		size: number,
		price: number,
		stopLoss: number,
		takeProfit: number
	): void {

		const id = this.id++,
			type = this.type,
			loss = this.loss,
			profit = this.profit,
			moneyLoss = this.moneyLoss,
			moneyProfit = this.moneyProfit;

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

		this.moneyLoss = +(this.loss * size).toFixed(2);
		this.moneyProfit = +(this.profit * size).toFixed(2);
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
			this.totalMoneyProfit += +this.positions[i].moneyProfit.toFixed(2);
		}
		for (let i = 0; i < this.positions.length; i++) {
			this.totalMoneyLoss += +this.positions[i].moneyLoss.toFixed(2);
		}
	}

	private getPositions(): void {
		this.positionDataService.getPositions()
			.subscribe(positions => this.positions = positions);
	}
}
