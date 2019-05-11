import { Component, ChangeDetectionStrategy, ViewEncapsulation, ElementRef, Renderer2 } from '@angular/core';

import { Indicator } from 'util/fabric/ui/buttons-indicators/indicator';

@Component({
	selector: 'gui-badge',
	templateUrl: 'badge.component.html',
	styleUrls: ['./badge.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-badge]': 'true'
	}
})
export class FabricBadgeComponent extends Indicator {

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}
}
