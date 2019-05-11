import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'input[gui-input]',
	templateUrl: `input.component.html`,
	styleUrls: ['./input.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-input]': 'true'
	}
})
export class FabricInputComponent {
}
