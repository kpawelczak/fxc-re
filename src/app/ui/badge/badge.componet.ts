import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gui-badge',
    templateUrl: './badge.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./badge.scss'],
    host: {
		'[class.gui-badge]': 'true'
	}
})
export class BadgeComponent { }
