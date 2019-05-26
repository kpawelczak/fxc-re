import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'tech-calc',
	template: `    `
})

export class TechnicalsCalculationsComponent implements OnChanges {

	@Input()
	public inputValues: Array<any> = [];

	@Output()
	calculatorPivotResults: EventEmitter<Array<string>> = new EventEmitter();

	@Output()
	calculatorFiboResults: EventEmitter<Array<string>> = new EventEmitter();

	private pivotResults: Array<string> = [];
	private fiboResults: Array<string> = [];

	private high: number;
	private low: number;
	private range: number;
	private result_236: string;
	private result_382: string;
	private result_50: string;
	private result_618: string;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.inputValues) {
			this.calculateTechnicals();
		}
	}

	calculateTechnicals(): void {
		this.high = this.inputValues[0];
		this.low = this.inputValues[1];
		this.range = this.high - this.low;
		this.calculateFibonacci();
		this.calculatePivotPoints();
	}

	calculateFibonacci(): void {
		const type = this.inputValues[4];

		if (type === 'Long') {
			this.result_236 = ((this.range * 0.764) + this.low).toFixed(5);
			this.result_382 = ((this.range * 0.618) + this.low).toFixed(5);
			this.result_50 = ((this.range * 0.50) + this.low).toFixed(5);
			this.result_618 = ((this.range * 0.382) + this.low).toFixed(5);
		}

		if (type === 'Short') {
			this.result_236 = (this.high - (this.range * 0.764)).toFixed(5);
			this.result_382 = (this.high - (this.range * 0.618)).toFixed(5);
			this.result_50 = (this.high - (this.range * 0.50)).toFixed(5);
			this.result_618 = (this.high - (this.range * 0.382)).toFixed(5);
		}

		this.fiboResults =
			[
				this.result_236,
				this.result_382,
				this.result_50,
				this.result_618
			];

		this.calculatorFiboResults.emit(this.fiboResults);
	}

	calculatePivotPoints(): void {
		const open = this.inputValues[2],
			close = this.inputValues[3],
			pivot = (this.high + this.low + close + open) / 4;

		const R3 = (pivot + this.range * 3).toFixed(5),
			R2 = (pivot + this.range * 2).toFixed(5),
			R1 = (pivot * 2 - this.low).toFixed(5),
			PP = (pivot).toFixed(5),
			S1 = (pivot * 2 - this.high).toFixed(5),
			S2 = (pivot - this.range * 2).toFixed(5),
			S3 = (pivot - this.range * 3).toFixed(5);

		this.pivotResults = [R3, R2, R1, PP, S1, S2, S3];
		this.calculatorPivotResults.emit(this.pivotResults);
	}
}
