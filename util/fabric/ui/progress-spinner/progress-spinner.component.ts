import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges } from '@angular/core';

export enum Mode {
    spin = "spin"
}
@Component({
    selector: 'gui-progress-spinner',
    templateUrl: 'progress-spinner.component.html',
    styleUrls: ['./progress-spinner.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-animations-active]': 'guiAnimationsActive',
        '[class.gui-second-circle]': 'guiSecondCircleActive',
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary',
    }
})
export class FabricProgressSpinnerComponent implements OnChanges {

    @Input()
    width: number = 5;

    @Input()
    diameter: number = 90;

    @Input()
    value: number = 0;

    @Input()
    mode: Mode;

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

    @Input()
    color: string;

    guiAnimationsActive: boolean = true;
    guiSecondCircleActive: boolean = true;

    r: number;
    circle: number;
    cropedCircle: number;
    circleHeight: number;
    circleWidth: number;
    newValue: number;

    ngOnChanges() {

        this.r = this.diameter / 2
        this.circle = this.diameter * Math.PI
        this.cropedCircle = this.circle * 0.02
        this.circleHeight = this.diameter + this.width
        this.circleWidth = this.diameter + this.width
        this.newValue = this.circle - (this.value * this.circle / 100)

        if (this.mode === Mode.spin) {
            this.guiAnimationsActive = false
            this.guiSecondCircleActive = false
            this.newValue = this.circle
        }
    }
}
