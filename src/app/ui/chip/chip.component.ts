import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'gui-chip',
    templateUrl: './chip.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./chip.scss'],
    host: {
        '[class.gui-chip]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary'
    }
})

export class ChipComponent {

    @Input() 
    public primary: boolean;
    @Input() 
    public secondary: boolean;

}
