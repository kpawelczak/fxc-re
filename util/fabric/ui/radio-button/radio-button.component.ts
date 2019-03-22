import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'gui-radio-button',
    templateUrl: `radio-button.component.html`,
    styleUrls: ['./radio-button.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-radio-button]': 'true',
    }
})

export class FabricRadioButtonComponent {

    @Input()
    name: string;

    @Input()
    checked: boolean;

    @Output()
    changed: EventEmitter<boolean> = new EventEmitter();

    check() {

        this.checked = true
        this.changed.emit(this.checked)

    }
}
