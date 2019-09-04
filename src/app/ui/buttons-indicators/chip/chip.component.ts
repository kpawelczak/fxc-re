import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

import { Indicator } from 'src/app/ui/buttons-indicators/indicator';

@Component({
	selector: 'gui-chip',
	templateUrl: 'chip.component.html',
	styleUrls: [
		'chip.scss',
		'./themes/chip.dark.scss',
		'./themes/chip.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-chip]': 'true'
	}
})
export class ChipComponent extends Indicator {

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}
}
