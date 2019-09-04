import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	Optional,
	Output,
	Renderer2,
	SimpleChanges,
	ViewEncapsulation
} from '@angular/core';

import { Indicator } from 'src/app/ui/buttons-indicators/indicator';
import { ToggleButtonGroupService } from 'src/app/ui/buttons-indicators/toggle-button-group/toggle-button-group.service';

@Component({
	selector: 'gui-button-toggle',
	templateUrl: `toggle-button.component.html`,
	styleUrls: [
		'toggle-button.scss',
		'./themes/toggle-button.dark.scss',
		'./themes/toggle-button.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-button-toggle]': 'true'
	}
})

export class ToggleButtonComponent extends Indicator {

	@Input()
	checked: boolean = false;

	@Input()
	disabled: boolean = false;

	@Output()
	changed: EventEmitter<boolean> = new EventEmitter();

	private buttonChecked = false;

	private readonly buttonId: number = Math.floor(Math.random() * 1000000);

	constructor(elementRef: ElementRef,
				renderer: Renderer2,
				@Optional() private toggleButtonGroupService: ToggleButtonGroupService) {
		super(elementRef, renderer);
		this.generateButtonId();
	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes.checked) {
			this.setButtonChecked(this.checked);
		}

		if (changes.disabled) {
			this.toggleDisabledCssClass();
		}
	}

	ngOnInit() {
		this.observeToggleButtonGroup();
	}

	tryToToggle(e: any): void {

		if (e.target.disabled) {
			e.stopPropagation();
		} else {
			this.toggle();
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

		if (this.toggleButtonGroupService !== null) {
			this.toggleButtonGroupService.toggleButton(this.buttonId);
		}

		if (this.buttonChecked) {
			this.addClass('gui-checked');
		} else {
			this.removeClass('gui-checked');
		}
	}

	private observeToggleButtonGroup(): void {
		if (this.toggleButtonGroupService !== null) {
			this.toggleButtonGroupService.observeToggledButton().subscribe(id => {

				if (id != this.buttonId) {
					this.buttonChecked = !this.buttonChecked;
					this.removeClass('gui-checked');
				} else {
					this.buttonChecked = true;
				}
				this.changed.emit(this.buttonChecked);
			});
		}
	}

	private generateButtonId() {
		return this.buttonId;
	}

	private toggleDisabledCssClass(): void {

		if (this.disabled) {
			this.addClass('gui-disabled');
		} else {
			this.removeClass('gui-disabled');
		}
	}
}
