import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { ToggleButtonGroupService } from 'src/app/ui/buttons-indicators/toggle-button-group/toggle-button-group.service';

@Component({
	selector: 'gui-toggle-button-group',
	templateUrl: './toggle-button-group.component.html',
	styleUrls: ['toggle-button-group.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-toggle-button-group]': 'true'
	},
	providers: [ToggleButtonGroupService]
})
export class ToggleButtonGroupComponent {
}
