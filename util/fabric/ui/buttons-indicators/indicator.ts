import { ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

export abstract class Indicator {

	@Input()
	primary: boolean;

	@Input()
	secondary: boolean;

	@Input()
	outline: boolean = false;

	private readonly PRIMARY_CLASS_NAME = 'gui-primary';
	private readonly SECONDARY_CLASS_NAME = 'gui-secondary';
	private readonly OUTLINE_CLASS_NAME = 'gui-outline';

	protected constructor(protected elementRef: ElementRef,
						  protected renderer: Renderer2) {
	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes.primary) {
			if (this.primary) {
				this.addClass(this.PRIMARY_CLASS_NAME);
			} else {
				this.removeClass(this.PRIMARY_CLASS_NAME);
			}
		}

		if (changes.secondary) {
			if (this.secondary) {
				this.addClass(this.SECONDARY_CLASS_NAME);
			} else {
				this.removeClass(this.SECONDARY_CLASS_NAME);
			}
		}

		if (changes.outline) {
			if (this.outline) {
				this.addClass(this.OUTLINE_CLASS_NAME);
			} else {
				this.removeClass(this.OUTLINE_CLASS_NAME);
			}
		}
	}

	protected addClass(className: string): void {
		this.renderer.addClass(this.elementRef.nativeElement, className);
	}

	protected removeClass(className: string): void {
		this.renderer.removeClass(this.elementRef.nativeElement, className);
	}
}
