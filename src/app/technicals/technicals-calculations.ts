import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tech-calc',
	template: `
		<button gui-button
				(click)="cal_fib(); cal_pivot()">
			Execute!
		</button>
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
	setR3: EventEmitter<string> = new EventEmitter();

	@Output()
	setR2: EventEmitter<string> = new EventEmitter();

	@Output()
	setR1: EventEmitter<string> = new EventEmitter();

	@Output()
	setPP: EventEmitter<string> = new EventEmitter();

	@Output()
	setS1: EventEmitter<string> = new EventEmitter();

	@Output()
	setS2: EventEmitter<string> = new EventEmitter();

	@Output()
	setS3: EventEmitter<string> = new EventEmitter();

	@Output()
	set236: EventEmitter<string> = new EventEmitter();

	@Output()
	set382: EventEmitter<string> = new EventEmitter();

	@Output()
	set50: EventEmitter<string> = new EventEmitter();

	@Output()
	set618: EventEmitter<string> = new EventEmitter();

	@Output()
	resultsCalc: EventEmitter<boolean> = new EventEmitter();

	public showResults: boolean;
	public Pivot: number;
	public result_R3: string;
	public result_R2: string;
	public result_R1: string;
	public result_PP: string;
	public result_S1: string;
	public result_S2: string;
	public result_S3: string;
	public result_236: string;
	public result_382: string;
	public result_50: string;
	public result_618: string;
	public Range: number;

	cal_fib() {

		this.showResults = true;
		this.resultsCalc.emit(this.showResults);

		this.Range = this.High - this.Low;

		if (this.type === 'Long') {

			this.result_236 = '=' + ' ' + ((this.Range * 0.764) + this.Low).toFixed(5);
			this.result_382 = '=' + ' ' + ((this.Range * 0.618) + this.Low).toFixed(5);
			this.result_50 = '=' + ' ' + ((this.Range * 0.50) + this.Low).toFixed(5);
			this.result_618 = '=' + ' ' + ((this.Range * 0.382) + this.Low).toFixed(5);

		}

		if (this.type === 'Short') {

			this.result_236 = '=' + ' ' + (this.High - (this.Range * 0.764)).toFixed(5);
			this.result_382 = '=' + ' ' + (this.High - (this.Range * 0.618)).toFixed(5);
			this.result_50 = '=' + ' ' + (this.High - (this.Range * 0.50)).toFixed(5);
			this.result_618 = '=' + ' ' + (this.High - (this.Range * 0.382)).toFixed(5);

		}

		this.set236.emit(this.result_236);
		this.set382.emit(this.result_382);
		this.set50.emit(this.result_50);
		this.set618.emit(this.result_618);

	}

	cal_pivot() {

		this.Range = this.High - this.Low;
		this.Pivot = (this.High + this.Low + this.Close) / 3;

		this.result_R3 = (this.Pivot + this.Range * 3).toFixed(5);
		this.result_R2 = (this.Pivot + this.Range * 2).toFixed(5);
		this.result_R1 = (this.Pivot * 2 - this.Low).toFixed(5);
		this.result_PP = (this.Pivot).toFixed(5);
		this.result_S1 = (this.Pivot * 2 - this.High).toFixed(5);
		this.result_S2 = (this.Pivot - this.Range * 2).toFixed(5);
		this.result_S3 = (this.Pivot - this.Range * 3).toFixed(5);

		this.setR3.emit(this.result_R3);
		this.setR2.emit(this.result_R2);
		this.setR1.emit(this.result_R1);
		this.setPP.emit(this.result_PP);
		this.setS1.emit(this.result_S1);
		this.setS2.emit(this.result_S2);
		this.setS3.emit(this.result_S3);
	}
}
