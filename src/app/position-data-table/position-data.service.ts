import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PositionDataTable } from './position-data-table';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' }) //nie mam pojecia co to jest -> do sprawdzenia
};

@Injectable({
	providedIn: 'root'
})
export class PositionDataService {

	private positionsUrl = 'api/positions';  // URL to web api (const: positions in in-memory-data.ts)

	constructor(private http: HttpClient) {
	}


	getPositions(): Observable<PositionDataTable[]> {
		return this.http.get<PositionDataTable[]>(this.positionsUrl);
	}

	/** POST: add a new position to the server */
	addPos(pos: PositionDataTable): Observable<PositionDataTable> {
		return this.http.post<PositionDataTable>(this.positionsUrl, pos, httpOptions);
	}

}
