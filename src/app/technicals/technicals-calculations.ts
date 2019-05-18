import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tech-calc',
	template: `
		<ul>
			<button gui-button
					(click)="calculateTechnicals()">
				Execute!
			</button>
		</ul>
	`
})

export class TechnicalsCalculationsComponent {

	@Input()
	public High;

	@Input()
	public Low;

	@Input()
	public type;

	@Input()
	public Open;

	@Input()
	public Close;

	@Output()
	calculatorPivotResults: EventEmitter<Array<string>> = new EventEmitter();

	@Output()
	calculatorFiboResults: EventEmitter<Array<string>> = new EventEmitter();

	@Output()
	calculatorShowResults: EventEmitter<boolean> = new EventEmitter();

	private pivotResults: Array<string> = [];
	private fiboResults: Array<string> = [];

	private showResults: boolean;
	private Pivot: number;
	private result_R3: string;
	private result_R2: string;
	private result_R1: string;
	private result_PP: string;
	private result_S1: string;
	private result_S2: string;
	private result_S3: string;
	private result_236: string;
	private result_382: string;
	private result_50: string;
	private result_618: string;
	private range: number;

	calculateTechnicals() {
		this.showResults = true;
		this.calculatorShowResults.emit(this.showResults);
		this.range = this.High - this.Low;
		this.cal_fib();
		this.cal_pivot();
	}

	cal_fib() {

		if (this.type === 'Long') {
			this.result_236 = ((this.range * 0.764) + this.Low).toFixed(5);
			this.result_382 = ((this.range * 0.618) + this.Low).toFixed(5);
			this.result_50 = ((this.range * 0.50) + this.Low).toFixed(5);
			this.result_618 = ((this.range * 0.382) + this.Low).toFixed(5);
		}

		if (this.type === 'Short') {
			this.result_236 = (this.High - (this.range * 0.764)).toFixed(5);
			this.result_382 = (this.High - (this.range * 0.618)).toFixed(5);
			this.result_50 = (this.High - (this.range * 0.50)).toFixed(5);
			this.result_618 = (this.High - (this.range * 0.382)).toFixed(5);
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

	cal_pivot() {

		this.Pivot = (this.High + this.Low + this.Close) / 3;

		this.result_R3 = (this.Pivot + this.range * 3).toFixed(5);
		this.result_R2 = (this.Pivot + this.range * 2).toFixed(5);
		this.result_R1 = (this.Pivot * 2 - this.Low).toFixed(5);
		this.result_PP = (this.Pivot).toFixed(5);
		this.result_S1 = (this.Pivot * 2 - this.High).toFixed(5);
		this.result_S2 = (this.Pivot - this.range * 2).toFixed(5);
		this.result_S3 = (this.Pivot - this.range * 3).toFixed(5);

		this.pivotResults =
			[
				this.result_R3,
				this.result_R2,
				this.result_R1,
				this.result_PP,
				this.result_S1,
				this.result_S2,
				this.result_S3
			];

		this.calculatorPivotResults.emit(this.pivotResults);
	}
}
