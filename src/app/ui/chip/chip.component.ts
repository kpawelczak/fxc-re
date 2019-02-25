import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gui-chip',
    templateUrl: './chip.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./chip.scss'],
    host: {
		'[class.gui-chip]': 'true'
	}
})
export class ChipComponent { }
