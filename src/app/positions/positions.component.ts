import { Component, OnDestroy, OnInit } from '@angular/core';

import { Position } from './position/position';
import { PositionDataService } from './position-data/position-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PositionCreator } from './position/position.creator';
import { DemoTable } from './demo/demo.component';

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

	private positionsSubscription: Subscription;

	constructor(private positionDataService: PositionDataService,
				private positionCreator: PositionCreator,
				private formBuilder: FormBuilder,
				private demoTable: DemoTable) {

		this.positionForm = this.formBuilder.group({
			'size': ['', [Validators.required, Validators.min(0.000001)]],
			'price': ['', [Validators.required, Validators.min(0.000001)]],
			'takeProfit': ['', [Validators.required, Validators.min(0.000001)]],
			'stopLoss': ['', [Validators.required, Validators.min(0.000001)]]
		});
	}

	ngOnInit() {
		this.getPositions();
		this.demoTable.observeInitTableStatus();
		this.demoTable.checkInitialTableStatus();
		this.calculateTotals();
	}

	ngOnDestroy() {
		this.positionsSubscription.unsubscribe();
		this.demoTable.initTableUnsubscribe();
	}

	addPosition(post) {
		this.demoTable.turnOff();

		let position = this.positionCreator.createPosition(post.size, post.price, post.stopLoss, post.takeProfit);
		this.sendPositionToTable(position);
	}

	sendPositionToTable(position: Position): void {
		this.positionDataService.insertPosition(position);
		this.calculateTotals();
	}

	update(event: Event, position: Position): void {
		event.preventDefault();

		let updatedPosition =
			this.positionCreator.createPosition(position.size, position.price, position.stopLoss, position.takeProfit, position.id);

		this.positionDataService.updatePosition(updatedPosition);
		this.calculateTotals();
	}

	delete(position: Position): void {
		this.positionDataService.deletePosition(position);
		this.calculateTotals();
	}

	clear(showInitTable: boolean): void {
		if (!showInitTable) {
			this.demoTable.clear(showInitTable);
		} else {
			Position.actualIndex = 1;
			this.positionDataService.clearPositions();
		}
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

	isTableEmpty(): boolean {
		return this.positions.length === 0;
	}

	private getPositions(): void {
		this.positionsSubscription =
			this.positionDataService.getPositions()
				.subscribe(positions => this.positions = positions);
	}

}
