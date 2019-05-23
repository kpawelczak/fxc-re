import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

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
	contentBlock: Array<string> = [];

	isTitleEnabled(): boolean {
		return !!this.title;
	}

	isImgEnabled(): boolean {
		return !!this.image;
	}

	isContentBlockEnabled(): boolean {
		return !!this.contentBlock;
	}

	isOnlyContentBlockEnabled(): boolean {
		return !this.title && !this.image && !!this.contentBlock;
	}
}
