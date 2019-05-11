import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { AbstractSpinner } from 'util/fabric/ui/spinners/abstract-spinner';

@Component({
	selector: 'gui-spinner',
	templateUrl: 'spinner.component.html',
	styleUrls: ['./spinner.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class FabricSpinnerComponent extends AbstractSpinner {

	@Input()
	color: string;

	constructor(elementRef: ElementRef,
				renderer: Renderer2) {
		super(elementRef, renderer);
	}

	ngOnInit() {
		super.ngOnInit();
	}
}
