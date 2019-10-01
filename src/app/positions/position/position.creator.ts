import { Injectable } from '@angular/core';
import { Position } from './position';

@Injectable()
export class PositionCreator {

	createPosition(size: number, price: number, stopLoss: number, takeProfit: number, id?: number): Position {
		const decimal = 10000;

		let type,
			loss,
			profit;

		if (!id) {
			id = Position.actualIndex;
			Position.actualIndex += 1;
		}

		if (takeProfit > price) {
			type = 'buy';
			profit = Math.round((takeProfit - price) * decimal);
			loss = Math.round((price - stopLoss) * decimal);
		} else if (takeProfit < price) {
			type = 'sell';
			profit = Math.round((price - takeProfit) * decimal);
			loss = Math.round((stopLoss - price) * decimal);
		} else {
			type = '-';
			profit = 0;
			loss = 0;
		}

		return {
			id: id,
			type: type,
			size: size,
			price: price,
			loss: loss,
			profit: profit,
			stopLoss: stopLoss,
			takeProfit: takeProfit,
			moneyLoss: +(loss * size).toFixed(2),
			moneyProfit: +(profit * size).toFixed(2)
		};
	}
}
