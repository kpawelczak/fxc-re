import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'gui-card',
	templateUrl: `card.component.html`,
	styleUrls: ['./card.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-card]': 'true'
	}
})
export class FabricCardComponent {

	@Input()
	title: string;

	@Input()
	image: string;

	@Input()
	description: string;

	isTitleEnabled(): boolean {
		return !!this.title;
	}

	isImgEnabled(): boolean {
		return !!this.image;
	}

	isDescriptionEnabled(): boolean {
		return !!this.description;
	}
}
