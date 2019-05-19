import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Position } from './position';
import { POSITIONS } from './mock-positions-data.service';

@Injectable()
export class PositionDataService {

	getPositions(): Observable<Position[]> {
		return of(POSITIONS);
	}

	insertPosition(position: Position) {
		Promise.resolve(POSITIONS).then((postions: Position[]) => postions.push(position));
	}
}
