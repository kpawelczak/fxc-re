import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { FibonacciResults } from './fibonacci-results';
import { PivotPointsResults } from './pivot-points-results';

@Injectable()
export class TechnicalsService {

	private fibonacciResults$ = new Subject<FibonacciResults>();
	private pivotPointsResults$ = new Subject<PivotPointsResults>();

	watchFibonacci(): Observable<FibonacciResults> {
		return this.fibonacciResults$.asObservable();
	}

	watchPivotPoints(): Observable<PivotPointsResults> {
		return this.pivotPointsResults$.asObservable();
	}

	getFibonacci(high: number, low: number, type: string): void {
		let fibonacci = new FibonacciResults(high, low, type);

		this.fibonacciResults$.next(fibonacci);
	}

	getPivotPoints(high: number, low: number, open: number, close: number): void {
		let pivotPoints = new PivotPointsResults(high, low, open, close);

		this.pivotPointsResults$.next(pivotPoints);
	}

}
