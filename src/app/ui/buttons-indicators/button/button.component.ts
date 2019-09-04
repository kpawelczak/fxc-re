import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, SimpleChanges, ViewEncapsulation } from '@angular/core';

import { Indicator } from 'src/app/ui/buttons-indicators/indicator';

@Component({
	selector: 'button[gui-button], a[gui-button]',
	templateUrl: `button.component.html`,
	styleUrls: [
		'button.scss',
		'./themes/button.dark.scss',
		'./themes/button.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-button]': 'true'
	}
})
export class ButtonComponent extends Indicator {

	@Input()
	link: boolean = false;

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}

	ngOnChanges(changes: SimpleChanges) {
		super.ngOnChanges(changes);

		if (changes.link) {
			if (this.link) {
				this.addClass('gui-link');
			} else {
				this.removeClass('gui-link');
			}
		}
	}


}
