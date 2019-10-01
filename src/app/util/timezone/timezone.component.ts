import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-timezone',
	templateUrl: './timezone.component.html'
})
export class TimezoneComponent implements OnInit, OnDestroy {

	clock = new Date();
	initialTime: number = this.timerPosition();
	timer: number = this.initialTime;
	private timeSubscription: Subscription;

	constructor(private renderer: Renderer2,
				private elementRef: ElementRef) {
	}

	ngOnInit() {
		this.marketSessionActive();

		this.timeSubscription =
			interval(1000).subscribe(
				() => {
					this.clock = new Date();
					this.timer = this.timerPosition();

					if (this.marketOpeningClosingHours()) {
						this.marketSessionActive();
					}
				}
			);
	}

	ngOnDestroy() {
		this.timeSubscription.unsubscribe();
	}

	marketSessionActive(): void {

		let londonSession: boolean = this.hourSelection(9) <= this.clock && this.clock < this.hourSelection(18),
			nySession: boolean = this.hourSelection(14) <= this.clock && this.clock < this.hourSelection(23),
			sydneySession: boolean = this.hourSelection(23) <= this.clock || this.clock < this.hourSelection(8),
			tokyoSession: boolean = this.hourSelection(1) <= this.clock && this.clock < this.hourSelection(10);

		const londonSessionEl = this.elementRef.nativeElement.querySelector('.' + 'london-market-time'),
			nySessionEl = this.elementRef.nativeElement.querySelector('.' + 'ny-market-time'),
			sydneySessionStartEl = this.elementRef.nativeElement.querySelector('.' + 'sydney-market-time'),
			sydneySessionEndEl = this.elementRef.nativeElement.querySelector('.' + 'sydney-market-time-end'),
			tokyoSessionStartEl = this.elementRef.nativeElement.querySelector('.' + 'tokyo-market-time'),
			tokyoSessionEndEl = this.elementRef.nativeElement.querySelector('.' + 'tokyo-market-time-end');

		if (londonSession) {
			this.renderer.addClass(londonSessionEl, 'session-active');
		} else {
			this.renderer.removeClass(londonSessionEl, 'session-active');
		}

		if (nySession) {
			this.renderer.addClass(nySessionEl, 'session-active');
		} else {
			this.renderer.removeClass(nySessionEl, 'session-active');
		}

		if (sydneySession) {
			this.renderer.addClass(sydneySessionStartEl, 'session-active');
			this.renderer.addClass(sydneySessionEndEl, 'session-active');
		} else {
			this.renderer.removeClass(sydneySessionStartEl, 'session-active');
			this.renderer.removeClass(sydneySessionEndEl, 'session-active');
		}

		if (tokyoSession) {
			this.renderer.addClass(tokyoSessionStartEl, 'session-active');
			this.renderer.addClass(tokyoSessionEndEl, 'session-active');
		} else {
			this.renderer.removeClass(tokyoSessionStartEl, 'session-active');
			this.renderer.removeClass(tokyoSessionEndEl, 'session-active');
		}

	}

	private timerPosition(): number {
		if (this.hourSelection(0) <= this.clock && this.hourSelection(7) > this.clock) {
			return ((this.clock.getHours() + 17) * 4.17 + this.clock.getMinutes() * 0.0695);
		} else {
			return ((this.clock.getHours() - 7) * 4.17 + this.clock.getMinutes() * 0.0695);
		}
	}

	private hourSelection(hour: number): Date {
		return new Date(
			this.clock.getFullYear(),
			this.clock.getMonth(),
			this.clock.getDate(),
			hour,
			0,
			0);
	}

	private marketOpeningClosingHours(): boolean {

		if (this.hourSelection(8) === this.clock ||
			this.hourSelection(9) === this.clock ||
			this.hourSelection(10) === this.clock ||
			this.hourSelection(14) === this.clock ||
			this.hourSelection(18) === this.clock ||
			this.hourSelection(23) === this.clock ||
			this.hourSelection(1) === this.clock) {
			return true;
		}

	}

}
