import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

@Component({
	selector: 'gui-progress-bar',
	templateUrl: 'progress-bar.component.html',
	styleUrls: ['./progress-bar.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-progress]': 'true'
	}
})
export class FabricProgressBarComponent {

	@Input()
	progress: number;

	@Input()
	color: string;

	@Input()
	height: number;

	@Input()
	width: number;

	@Input()
	textTop: string;

	@Input()
	textAlign: string;

	@Input()
	primary: boolean;

	@Input()
	secondary: boolean;

	constructor(private elementRef: ElementRef,
				private renderer: Renderer2) {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.primary) {
			if (this.primary) {
				this.addClass('gui-primary');
			} else {
				this.removeClass('gui-primary');
			}
		}
		if (changes.secondary) {
			if (this.secondary) {
				this.addClass('gui-secondary');
			} else {
				this.removeClass('gui-secondary');
			}
		}
	}

	private addClass(className: string): void {
		this.renderer.addClass(this.elementRef.nativeElement, className);
	}

	private removeClass(className: string): void {
		this.renderer.removeClass(this.elementRef.nativeElement, className);
	}
}
