import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gui-checkbox',
    templateUrl: `checkbox.component.html`,
    styleUrls: ['./checkbox.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-checkbox]': 'true',
    }
})

export class FabricCheckboxComponent {

    @Input()
    name: string;

    @Input()
    checked: boolean;

    @Output()
    changed: EventEmitter<boolean> = new EventEmitter();

    check() {

        this.checked = !this.checked;

        if (this.checked === true) {
            this.changed.emit(this.checked)
        }
        if (this.checked === false) {
            this.changed.emit(this.checked)
        }
    }
}
