import { Injectable } from '@angular/core';
import { PositionDataService } from '../position-data/position-data.service';
import { Position } from '../position/position';
import { PositionCreator } from '../position/position.creator';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable()
export class DemoTable {

	private initialTableState: Array<Position>;
	private showDemoTable: boolean;
	private initTableSubscription: Subscription;

	private showInitialTable$ = new BehaviorSubject(true);

	constructor(private positionDataService: PositionDataService,
				private positionCreator: PositionCreator) {
	}

	showInitialTable(): Observable<boolean> {
		return this.showInitialTable$.asObservable();
	}

	sendPositionToTable(position: Position): void {
		this.positionDataService.insertPosition(position);
	}

	clear(showInitTable: boolean): void {
		Position.actualIndex = 1;
		this.positionDataService.clearPositions();

		if (!showInitTable) {
			this.initialTableState = [];
			this.showInitialTable$.next(false);
		}
	}

	checkInitialTableStatus(): void {
		const isInitialTableNotCleared = this.initialTableState && this.initialTableState.length > 0;

		if (this.showDemoTable) {
			this.createInitialTable();

			this.sendPositionToTable(this.initialTableState[0]);
			this.sendPositionToTable(this.initialTableState[1]);
			this.sendPositionToTable(this.initialTableState[2]);
			this.sendPositionToTable(this.initialTableState[3]);

		} else if (isInitialTableNotCleared) {
			this.clear(false);
		}
	}

	createInitialTable(): void {
		this.initialTableState = [
			this.positionCreator.createPosition(1, 1.23200, 1.2325, 1.2000),
			this.positionCreator.createPosition(1, 1.23100, 1.2325, 1.2000),
			this.positionCreator.createPosition(1, 1.23000, 1.2325, 1.2000),
			this.positionCreator.createPosition(1, 1.22950, 1.2325, 1.2000)
		];
	}

	observeInitTableStatus(): void {
		this.initTableSubscription =
			this.showInitialTable()
				.subscribe(
					(show) => this.showDemoTable = show
				);
	}

	initTableUnsubscribe(): void {
		this.doNotRemoveInitTableBeforeNewData();
		this.initTableSubscription.unsubscribe();
	}

	turnOff() {
		if (this.showDemoTable) {
			this.showInitialTable$.next(false);
			this.checkInitialTableStatus();
			this.initTableSubscription.unsubscribe();
		}
	}

	private doNotRemoveInitTableBeforeNewData(): void {
		const isInitialTableNotCleared = this.initialTableState && this.initialTableState.length > 0;

		if (isInitialTableNotCleared) {
			this.clear(isInitialTableNotCleared);
		}
	}
}
