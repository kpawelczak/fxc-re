import { ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

export abstract class AbstractSpinner implements OnChanges, OnInit {

	@Input()
	width: number = 5;

	@Input()
	diameter: number = 90;

	@Input()
	primary: boolean;

	@Input()
	secondary: boolean;

	@Input()
	outline: boolean = false;

	r: number;

	circumference: number;

	croppedCircle: number;

	circleSize: number;

	protected constructor(protected elementRef: ElementRef,
						  protected renderer: Renderer2) {
	}

	ngOnChanges(changes: SimpleChanges) {
		this.calculateCircle();

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

	ngOnInit() {
		this.calculateCircle();
	}

	private calculateCircle(): void {
		this.circumference = this.calculateCircumference(this.diameter);
		this.r = this.calculateR(this.diameter);
		this.croppedCircle = this.calculateDashes(this.circumference);
		this.circleSize = this.calculateSize(this.diameter, this.width);
	}

	private calculateCircumference(diameter: number): number {
		return diameter * Math.PI;
	}

	private calculateR(diameter: number): number {
		return diameter / 2;
	}

	private calculateDashes(circumference: number): number {
		return circumference * 0.02;
	}

	private calculateSize(diameter: number, width: number): number {
		return diameter + width;
	}

	protected addClass(className: string): void {
		this.renderer.addClass(this.elementRef.nativeElement, className);
	}

	protected removeClass(className: string): void {
		this.renderer.removeClass(this.elementRef.nativeElement, className);
	}
}
