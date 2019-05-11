import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input,
	Output,
	EventEmitter,
	SimpleChanges, Renderer2, ElementRef
} from '@angular/core';

import { Indicator } from 'util/fabric/ui/buttons-indicators/indicator';

@Component({
	selector: 'gui-button-toggle',
	templateUrl: `toggle-button.component.html`,
	styleUrls: ['./toggle-button.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-button-toggle]': 'true'
	}
})
export class FabricToggleButtonComponent extends Indicator {

	@Input()
	checked: boolean = false;

	@Input()
	disabled: boolean = false;

	@Output()
	changed: EventEmitter<boolean> = new EventEmitter();

	private buttonChecked = false;

	constructor(elementRef: ElementRef,
				renderer2: Renderer2) {
		super(elementRef, renderer2);

	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes.checked) {
			this.setButtonChecked(this.checked);
		}

		if (changes.disabled) {
			this.toggleDisabledCssClass();
		}
	}

	toggle() {
		this.toggleButtonChecked();
		this.changed.emit(this.buttonChecked);
	}

	private toggleButtonChecked(): void {
		this.setButtonChecked(!this.buttonChecked);
	}

	private setButtonChecked(checked: boolean): void {
		this.buttonChecked = checked;

		if (this.buttonChecked) {
			this.addClass('gui-checked');
		} else {
			this.removeClass('gui-checked');
		}

	}

	private toggleDisabledCssClass(): void {

		if (this.disabled) {
			this.addClass('gui-disabled');
		} else {
			this.removeClass('gui-disabled');
		}
	}
}
