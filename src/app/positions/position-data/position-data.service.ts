import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Position } from '../position/position';
import { POSITIONS } from './positions';

@Injectable()
export class PositionDataService {

	positions$ = new BehaviorSubject(POSITIONS);
	positions = POSITIONS;

	showInitialTable$ = new BehaviorSubject(true);

	getPositions(): Observable<Position[]> {
		return this.positions$.asObservable();
	}

	showInitialTable(): Observable<boolean> {
		return this.showInitialTable$.asObservable();
	}

	insertPosition(position: Position): void {
		this.positions.push(position);
		this.positions$.next(this.positions);
		this.showInitialTable$.next(false)
	}

	deletePosition(position: Position): void {
		for (let i = 0; i < this.positions.length; i++) {
			if (this.positions[i] === position) {
				this.positions.splice(i, 1);
				i--;
			}
			this.positions$.next(this.positions);
		}
	}

	updatePosition(position: Position): void {
		for (let i = 0; i < this.positions.length; i++) {
			if (this.positions[i].id === position.id) {
				this.positions[i] = position;
			}

			this.positions$.next(this.positions);
		}
	}

	clearPositions(showInitTable?:boolean): void {
		this.positions = [];
		this.positions$.next(this.positions);
		this.showInitialTable$.next(showInitTable)
	}
}
