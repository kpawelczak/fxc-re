import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gui-button-toggle',
    templateUrl: `toggle-button.component.html`,
    styleUrls: ['./toggle-button.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-button-toggle]': 'true',
        '[class.gui-checked]': 'checked',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary',
    }
})

export class FabricToggleButtonComponent {

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

    @Input()
    checked: boolean = false;

    @Output()
    changed: EventEmitter<boolean> = new EventEmitter();

    toggle() {

        this.checked = !this.checked

        if (this.checked === true) {
            this.changed.emit(this.checked)
        }
        if (this.checked === false) {
            this.changed.emit(this.checked)
        }
    }
}
