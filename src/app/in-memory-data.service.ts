import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pos } from './calc-input/pos';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const positions = [
            {
                id: 0,
                size: 'Size',
                price: 'Price',
                type: 'Type',
                pipsloss: 'Pips loss',
                loss: 'Loss',
                pipswin: 'Pips Win',
                profit: 'Profit'
            },
        ];
        return { positions };
    }

    genId() {
        (pos => pos.id + 1)
    }
}