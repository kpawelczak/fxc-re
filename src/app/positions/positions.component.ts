import { Component, OnDestroy, OnInit } from '@angular/core';

import { Position } from './position-data/position';
import { PositionDataService } from './position-data/position-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-positions',
	templateUrl: './positions.component.html'
})
export class PositionsComponent implements OnInit, OnDestroy {

	positions: Array<Position>;
	positionForm: FormGroup;

	totalLoss: number;
	totalProfit: number;
	totalMoneyProfit: number = 0;
	totalMoneyLoss: number = 0;

	private initialTableState: Array<Position>;
	private showInitialTable: boolean;

	private positionsSubscription: Subscription;
	private initTableSubscription: Subscription;

	constructor(private positionDataService: PositionDataService,
				private formBuilder: FormBuilder) {

		this.positionForm = this.formBuilder.group({
			'size': ['', [Validators.required, Validators.min(0.000001)]],
			'price': ['', [Validators.required, Validators.min(0.000001)]],
			'takeProfit': ['', [Validators.required, Validators.min(0.000001)]],
			'stopLoss': ['', [Validators.required, Validators.min(0.000001)]]
		});
	}

	ngOnInit() {
		this.getPositions();
		this.checkInitialTableStatus();
		this.calculateTotals();
	}

	ngOnDestroy() {
		this.positionsSubscription.unsubscribe();
		this.initTableUnsubscribe();
	}

	addPosition(post) {
		this.checkInitialTableStatus();

		let position = this.createPosition(post.size, post.price, post.stopLoss, post.takeProfit);
		this.sendPositionToTable(position);
	}

	sendPositionToTable(position: Position): void {
		this.positionDataService.insertPosition(position);
		this.calculateTotals();
	}

	createPosition(size: number, price: number, stopLoss: number, takeProfit: number, id?: number): Position {
		const decimal = 10000;

		let type,
			loss,
			profit;

		if (!id) {
			id = Position.actualIndex;
			Position.actualIndex += 1;
		}

		if (takeProfit > price) {
			type = 'buy';
			profit = Math.round((takeProfit - price) * decimal);
			loss = Math.round((price - stopLoss) * decimal);
		} else if (takeProfit < price) {
			type = 'sell';
			profit = Math.round((price - takeProfit) * decimal);
			loss = Math.round((stopLoss - price) * decimal);
		} else {
			type = '-';
			profit = 0;
			loss = 0;
		}

		return {
			id: id,
			type: type,
			size: size,
			price: price,
			loss: loss,
			profit: profit,
			stopLoss: stopLoss,
			takeProfit: takeProfit,
			moneyLoss: +(loss * size).toFixed(2),
			moneyProfit: +(profit * size).toFixed(2)
		};
	}

	update(event: Event, position: Position): void {
		event.preventDefault();

		let updatedPosition =
			this.createPosition(position.size, position.price, position.stopLoss, position.takeProfit, position.id);

		this.positionDataService.updatePosition(updatedPosition);
		this.calculateTotals();
	}

	delete(position: Position): void {
		this.positionDataService.deletePosition(position);
		this.calculateTotals();
	}

	clear(showInitTable: boolean): void {
		Position.actualIndex = 1;
		this.positionDataService.clearPositions(showInitTable);
		this.calculateTotals();

		if (!showInitTable) {
			this.initialTableState = [];
		}
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
		this.positionsSubscription =
			this.positionDataService.getPositions()
				.subscribe(positions => this.positions = positions);
	}

	private observeInitTableStatus() {
		this.initTableSubscription =
			this.positionDataService.showInitialTable()
				.subscribe(
					(show) => this.showInitialTable = show
				);
	}

	private checkInitialTableStatus(): void {
		this.observeInitTableStatus();

		const isInitialTableNotCleared = this.initialTableState && this.initialTableState.length > 0;

		if (this.showInitialTable) {
			this.createInitialTable();

			this.sendPositionToTable(this.initialTableState[0]);
			this.sendPositionToTable(this.initialTableState[1]);
			this.sendPositionToTable(this.initialTableState[2]);
			this.sendPositionToTable(this.initialTableState[3]);

		} else if (isInitialTableNotCleared) {
			this.clear(false);
		}
	}

	private createInitialTable(): void {
		this.initialTableState = [
			this.createPosition(1, 1.23200, 1.2325, 1.2000),
			this.createPosition(1, 1.23100, 1.2325, 1.2000),
			this.createPosition(1, 1.23000, 1.2325, 1.2000),
			this.createPosition(1, 1.22950, 1.2325, 1.2000)
		];
	}

	private initTableUnsubscribe(): void {
		this.doNotRemoveInitTableBeforeNewData();
		this.initTableSubscription.unsubscribe();
	}

	private doNotRemoveInitTableBeforeNewData(): void {
		const isInitialTableNotCleared = this.initialTableState && this.initialTableState.length > 0;

		if (isInitialTableNotCleared) {
			this.clear(isInitialTableNotCleared);
		}
	}

	private isTableEmpty(): boolean {
		return this.positions.length === 0;
	}

}
