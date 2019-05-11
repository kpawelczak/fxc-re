import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

import { Indicator } from 'util/fabric/ui/buttons-indicators/indicator';

@Component({
	selector: 'gui-chip',
	templateUrl: 'chip.component.html',
	styleUrls: ['./chip.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-chip]': 'true'
	}
})
export class FabricChipComponent extends Indicator {

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}
}
