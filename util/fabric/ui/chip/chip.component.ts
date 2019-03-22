import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'gui-chip',
    templateUrl: 'chip.component.html',
    styleUrls: ['./chip.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-chip]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary'
    }
})

export class FabricChipComponent {

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

}
