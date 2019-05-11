import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const positions = [
			{
				id: 0,
				size: 0,
				price: 0,
				type: 0,
				pipsloss: 0,
				loss: 0,
				pipswin: 0,
				profit: 0
			}
		];
		return { positions };
	}

	genId() {
		(pos => pos.id + 1);
	}
}
