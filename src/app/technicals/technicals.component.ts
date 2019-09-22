import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Fibonacci } from './calculations/fibonacci';
import { FibonacciResults } from './calculations/fibonacci-results';
import { PivotPoints } from './calculations/pivot-points';
import { PivotPointsResults } from './calculations/pivot-points-results';
import { TechnicalsService } from './calculations/technicals.service';

import { Subscription } from 'rxjs';


@Component({
	selector: 'app-technicals',
	templateUrl: './technicals.component.html',
	providers: [TechnicalsService]
})
export class TechnicalsComponent implements OnInit, OnDestroy {

	techForm: FormGroup;

	fibonacci: Fibonacci;
	pivotPoints: PivotPoints;

	type: string = 'Buy';

	fibonacci236: number = 0;
	fibonacci382: number = 0;
	fibonacci50: number = 0;
	fibonacci618: number = 0;

	pivotR3: number = 0;
	pivotR2: number = 0;
	pivotR1: number = 0;
	pivotPP: number = 0;
	pivotS1: number = 0;
	pivotS2: number = 0;
	pivotS3: number = 0;

	private fibonacciSubscription: Subscription;
	private pivotPointsSubscription: Subscription;

	constructor(private formBuilder: FormBuilder,
				private technicalsService: TechnicalsService) {

		this.techForm = formBuilder.group({
			'High': ['', [Validators.required, Validators.min(0.000001)]],
			'Low': ['', [Validators.required, Validators.min(0.000001)]],
			'Open': ['', [Validators.required, Validators.min(0.000001)]],
			'Close': ['', [Validators.required, Validators.min(0.000001)]]
		});
	}

	ngOnInit() {
		this.observeFibonacci();
		this.observePivotPoints();
	}

	ngOnDestroy() {
		this.fibonacciSubscription.unsubscribe();
		this.pivotPointsSubscription.unsubscribe();
	}

	calculateTechnicals(post): void {
		let high = post.High,
			low = post.Low,
			open = post.Open,
			close = post.Close;

		this.calculateFibonacci(high, low);
		this.calculatePivotPoints(high, low, open, close);

	}

	calculateFibonacci(high: number, low: number): void {
		this.technicalsService.getFibonacci(high, low, this.type);

		this.fibonacci236 = this.fibonacci.level236;
		this.fibonacci382 = this.fibonacci.level382;
		this.fibonacci50 = this.fibonacci.level50;
		this.fibonacci618 = this.fibonacci.level618;
	}

	calculatePivotPoints(high: number, low: number, open: number, close: number): void {
		this.technicalsService.getPivotPoints(high, low, open, close);

		this.pivotR3 = this.pivotPoints.r3;
		this.pivotR2 = this.pivotPoints.r2;
		this.pivotR1 = this.pivotPoints.r1;
		this.pivotPP = this.pivotPoints.pp;
		this.pivotS1 = this.pivotPoints.s1;
		this.pivotS2 = this.pivotPoints.s2;
		this.pivotS3 = this.pivotPoints.s3;
	}

	getSelectedOption(type): void {
		this.type = type;
	}

	isTrend(): string {
		if (this.type === 'Buy') {
			return 'Uptrend';
		} else {
			return 'Downtrend';
		}
	}

	private observeFibonacci(): void {
		this.fibonacciSubscription =
			this.technicalsService.watchFibonacci()
				.subscribe(
					(fibonacci: FibonacciResults) => {
						this.fibonacci = fibonacci.calculateFibonacci();
					}
				);
	}

	private observePivotPoints(): void {
		this.pivotPointsSubscription =
			this.technicalsService.watchPivotPoints()
				.subscribe(
					(pivotPoints: PivotPointsResults) => {
						this.pivotPoints = pivotPoints.calculatePivotPoints();
					}
				);
	}

}
