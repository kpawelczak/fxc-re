import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'gui-spinner',
    templateUrl: 'spinner.component.html',
    styleUrls: ['./spinner.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    host: {
        '[class.gui-primary]': 'primary',
        '[class.gui-secondary]': 'secondary',
    }
})
export class FabricSpinnerComponent implements OnInit, OnChanges {

    @Input()
    width: number = 5;

    @Input()
    diameter: number = 90;

    @Input()
    primary: boolean;

    @Input()
    secondary: boolean;

    @Input()
    color: string;

    r: number;
    circle: number;
    cropedCircle: number;
    circleHeight: number;
    circleWidth: number;

    createCircle() {
        this.r = this.diameter / 2;
        this.circle = this.diameter * Math.PI;
        this.cropedCircle = this.circle * 0.02;
        this.circleHeight = this.diameter + this.width;
        this.circleWidth = this.diameter + this.width;
    }

    ngOnInit() {
        this.createCircle();
    }

    ngOnChanges() {
        this.createCircle();
    }
}
