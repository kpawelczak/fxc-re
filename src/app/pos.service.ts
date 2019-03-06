import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Pos } from './calc-input/pos';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //nie mam pojecia co to jest -> do sprawdzenia
};

@Injectable({
    providedIn: 'root'
})
export class PosService {

    private positionsUrl = 'api/positions';  // URL to web api (const: positions in in-memory-data.ts)

    constructor(private http: HttpClient) { }


    getPositions(): Observable<Pos[]> {
        return this.http.get<Pos[]>(this.positionsUrl)
    }

    /** POST: add a new position to the server */
    addPos(pos: Pos): Observable<Pos> {
        return this.http.post<Pos>(this.positionsUrl, pos, httpOptions);
    }

}
