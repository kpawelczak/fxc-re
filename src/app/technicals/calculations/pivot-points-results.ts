import { PivotPoints } from './pivot-points';

export class PivotPointsResults {

	constructor(private high: number,
				private low: number,
				private open: number,
				private close: number) {
	}

	calculatePivotPoints(): PivotPoints {
		let range = this.high - this.low,
			pivot = (this.high + this.low + this.close + this.open) / 4;

		return {
			r3: pivot + range * 3,
			r2: pivot + range * 2,
			r1: pivot * 2 - this.low,
			pp: pivot,
			s1: pivot * 2 - this.high,
			s2: pivot - range * 2,
			s3: pivot - range * 3
		};
	}
}
