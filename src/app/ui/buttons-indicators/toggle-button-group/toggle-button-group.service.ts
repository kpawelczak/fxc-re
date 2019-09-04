import { Observable, Subject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()

export class ToggleButtonGroupService implements OnDestroy {

	private readonly toggleButtonId$: Subject<number> = new Subject();

	ngOnDestroy() {
		this.toggleButtonId$.next();
		this.toggleButtonId$.complete();
	}

	observeToggledButton(): Observable<number> {
		return this.toggleButtonId$.asObservable();
	}

	toggleButton(id: number): void {
		this.toggleButtonId$.next(id);
	}
}
