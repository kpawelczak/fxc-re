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

	clearPositions() {
		this.positions = [];
		this.positions$.next(this.positions);
	}
}
