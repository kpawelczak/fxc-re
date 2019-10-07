import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-market-sessions',
	templateUrl: './market-sessions.component.html'
})
export class MarketSessionsComponent implements OnInit, OnDestroy {

	currentTime: Date;
	currentTimePosition: number;

	private timeSubscription: Subscription;

	private readonly hourPercent: number = 4.17;
	private readonly minutePercent: number = 0.0695;

	constructor(private renderer: Renderer2,
				private elementRef: ElementRef) {
	}

	ngOnInit() {
		this.initialData();

		this.timeSubscription =
			interval(1000).subscribe(
				() => {
					this.currentTime = new Date();
					this.currentTimePosition = this.calculateTimerPosition();
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

		let londonSession: boolean = this.hourSelection(9) <= this.currentTime && this.currentTime < this.hourSelection(18),
			nySession: boolean = this.hourSelection(14) <= this.currentTime && this.currentTime < this.hourSelection(23),
			sydneySession: boolean = this.hourSelection(23) <= this.currentTime || this.currentTime < this.hourSelection(8),
			tokyoSession: boolean = this.hourSelection(2) <= this.currentTime && this.currentTime < this.hourSelection(11);

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

	private calculateTimerPosition(): number {
		if (this.hourSelection(0) <= this.currentTime && this.hourSelection(7) > this.currentTime) {
			return ((this.currentTime.getHours() + 17) * this.hourPercent + this.currentTime.getMinutes() * this.minutePercent);
		} else {
			return ((this.currentTime.getHours() - 7) * this.hourPercent + this.currentTime.getMinutes() * this.minutePercent);
		}
	}

	private hourSelection(hour: number): Date {
		return new Date(
			this.currentTime.getFullYear(),
			this.currentTime.getMonth(),
			this.currentTime.getDate(),
			hour,
			this.currentTime.getMinutes(),
			this.currentTime.getSeconds());
	}

	private marketOpeningClosingHours(): boolean {

		if (this.hourSelection(8) ||
			this.hourSelection(9) ||
			this.hourSelection(11) ||
			this.hourSelection(14) ||
			this.hourSelection(18) ||
			this.hourSelection(23) ||
			this.hourSelection(2)) {
			return true;
		}
	}

	private initialData() {
		this.currentTime = new Date();
		this.currentTimePosition = this.calculateTimerPosition();
		this.marketSessionActive();
	}

}
