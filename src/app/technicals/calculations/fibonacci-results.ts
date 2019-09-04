import { Fibonacci } from './fibonacci';

export class FibonacciResults {

	constructor(private high: number,
				private low: number,
				private type: string) {
	}

	calculateFibonacci(): Fibonacci {
		let range = this.high - this.low;

		if (this.type === 'Buy') {
			return {
				level236: range * 0.764 + this.low,
				level382: range * 0.618 + this.low,
				level50: range * 0.50 + this.low,
				level618: range * 0.382 + this.low
			};
		} else {
			return {
				level236: this.high - range * 0.764,
				level382: this.high - range * 0.618,
				level50: this.high - range * 0.50,
				level618: this.high - range * 0.382
			};
		}
	}
}
