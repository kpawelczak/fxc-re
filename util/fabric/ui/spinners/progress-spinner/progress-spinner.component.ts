import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges, OnInit, ElementRef, Renderer2, SimpleChanges } from '@angular/core';

import { AbstractSpinner } from 'util/fabric/ui/spinners/abstract-spinner';
import { SpinnerMode } from 'util/fabric/ui/spinners/progress-spinner/spinner-mode';

@Component({
	selector: 'gui-progress-spinner',
	templateUrl: 'progress-spinner.component.html',
	styleUrls: ['./progress-spinner.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class FabricProgressSpinnerComponent extends AbstractSpinner implements OnChanges, OnInit {

	@Input()
	value: number = 0;

	@Input()
	mode: SpinnerMode;

	@Input()
	color: string;

	animationsDisabled: boolean = true;

	secondCircleDisabled: boolean = true;

	valuePercentage: number;

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}

	ngOnChanges(changes: SimpleChanges) {
		super.ngOnChanges(changes);

		this.calculateValuePercentage(this.circumference, this.value);

		if (this.mode === SpinnerMode.Spin) {
			this.animationsDisabled = false;
			this.secondCircleDisabled = false;
			this.value = 0;
		}

		if (this.animationsDisabled) {
			this.addClass('gui-animations-disabled');
		} else {
			this.removeClass('gui-animations-disabled');
		}

		if (this.secondCircleDisabled) {
			this.addClass('gui-second-circle-disabled');
		} else {
			this.removeClass('gui-second-circle-disabled');
		}
	}

	ngOnInit() {
		this.calculateValuePercentage(this.circumference, this.value);
	}

	protected calculateValuePercentage(circumference: number, value: number) {
		this.valuePercentage = circumference - (value * circumference / 100);
	}
}
