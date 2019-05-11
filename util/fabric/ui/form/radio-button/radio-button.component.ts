import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, Renderer2, OnChanges } from '@angular/core';

@Component({
	selector: 'gui-radio-button',
	templateUrl: `radio-button.component.html`,
	styleUrls: ['./radio-button.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-radio-button]': 'true'
	}
})
export class FabricRadioButtonComponent implements OnChanges {

	@Input()
	name: string;

	@Input()
	checked: boolean = false;

	@Input()
	disabled: boolean;

	@Output()
	changed: EventEmitter<boolean> = new EventEmitter();

	constructor(private elementRef: ElementRef,
				private renderer: Renderer2) {
	}

	ngOnChanges() {
		if (this.disabled) {
			this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
		} else {
			this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
		}
	}

	check() {
		this.checked = true;
		this.changed.emit(this.checked);
	}
}
