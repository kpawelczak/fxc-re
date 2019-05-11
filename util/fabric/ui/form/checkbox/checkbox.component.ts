import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	Renderer2,
	OnChanges, SimpleChanges
} from '@angular/core';

@Component({
	selector: 'gui-checkbox',
	templateUrl: `checkbox.component.html`,
	styleUrls: ['./checkbox.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-checkbox]': 'true'
	}
})
export class FabricCheckboxComponent implements OnChanges {

	@Input()
	name: string;

	@Input()
	checked: boolean = false;

	@Input()
	disabled: boolean;

	@Output()
	changed: EventEmitter<boolean> = new EventEmitter();

	constructor(private elementRef: ElementRef,
				private renderer: Renderer2) {
	}

	ngOnChanges(changes: SimpleChanges) {
		if (changes.disabled) {
			if (this.disabled) {
				this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
			} else {
				this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
			}
		}
	}

	check() {
		this.checked = !this.checked;
		this.changed.emit(this.checked);
	}

}
