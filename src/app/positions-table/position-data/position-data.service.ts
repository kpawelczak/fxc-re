import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Position } from './position';
import { POSITIONS } from './mock-positions-data.service';

@Injectable()
export class PositionDataService {

	positions$ = new BehaviorSubject(POSITIONS);
	positions = POSITIONS;

	getPositions(): Observable<Position[]> {
		return this.positions$.asObservable();
	}

	insertPosition(position: Position) {
		this.positions.push(position);
		this.positions$.next(this.positions);
	}

	deletePosition(position: Position) {
		for (let i = 0; i < this.positions.length; i++) {
			if (this.positions[i] === position) {
				this.positions.splice(i, 1);
				i--;
			}
			this.positions$.next(this.positions);
		}
	}

	updatePosition(position: Position) {
		for (let i = 0; i < this.positions.length; i++) {
			if (this.positions[i].id === position.id) {
				this.positions[i] = position;
			}
			this.positions$.next(this.positions);
		}
	}

	clearPositions() {
		this.positions = [];
		this.positions$.next(this.positions);
	}
}
