import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'gui-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['./progress-bar.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-progress]': 'true',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary',
    }
})

export class FabricProgressBarComponent {

    @Input()
    progress: number;

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

    @Input()
    color: string;

    @Input()
    height: number;

    @Input()
    width: number;

    @Input()
    textTop: string;

    @Input()
    textAlign: string;

}
