import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'input[gui-input]',
	templateUrl: `input.component.html`,
	styleUrls: [
		'input.scss',
		'./themes/input.dark.scss',
		'./themes/input.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-input]': 'true'
	}
})
export class InputComponent {
}
