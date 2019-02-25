import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'button[gui-button],gui-button',
    templateUrl: `button.component.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button.scss'],
    host: {
        '[class.gui-button]': 'true'
    }
})
export class FabricButtonComponent {
}
