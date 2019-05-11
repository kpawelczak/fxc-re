import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'gui-button-group',
	templateUrl: './button-group.component.html',
	styleUrls: ['./button-group.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-button-group]': 'true'
	}
})
export class FabricButtonGroupComponent {
}
