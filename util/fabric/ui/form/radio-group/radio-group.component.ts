import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'gui-radio-group',
	templateUrl: './radio-group.component.html',
	styleUrls: ['./radio-group.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-radio-group]': 'true'
	}
})
export class FabricRadioGroupComponent {
}
