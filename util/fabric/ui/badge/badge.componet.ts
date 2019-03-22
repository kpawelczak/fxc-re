import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, } from '@angular/core';

@Component({
    selector: 'gui-badge',
    templateUrl: 'badge.component.html',
    styleUrls: ['./badge.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-badge]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary'
    }
})

export class FabricBadgeComponent {

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

}
