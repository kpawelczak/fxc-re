import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'button[gui-button],gui-button',
    templateUrl: `button.component.html`,
    styleUrls: ['./button.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-button]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary'
    }
})

export class FabricButtonComponent {

    @Input()
    primary: boolean;
    
    @Input()
    secondary: boolean;

}
