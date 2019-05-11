import {
	Component,
	ChangeDetectionStrategy,
	ViewEncapsulation,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	OnChanges,
	SimpleChanges,
	ViewChild,
	Renderer2,
	ChangeDetectorRef
} from '@angular/core';

@Component({
	selector: 'gui-select',
	templateUrl: `select.component.html`,
	styleUrls: ['./select.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-select]': 'true'
	}
})
export class FabricSelectComponent implements OnChanges {

	@ViewChild('optionlist')
	optionListRef: ElementRef;

	@Input()
	options: Array<string> = [];

	@Input()
	placeholder: string;

	@Input()
	selected: string;

	@Input()
	width: number = 100;

	@Input()
	disabled: boolean = false;

	@Output()
	optionChanged = new EventEmitter();

	selectedOption: string;

	initAnimationDisabled = true;

	private open: boolean = false;

	private readonly SELECTED_OPTION_CLASS_NAME = 'gui-selected-option';

	constructor(private elementRef: ElementRef,
				private renderer: Renderer2,
				private changeDetectorRef: ChangeDetectorRef) {
	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes.placeholder) {
			this.selectedOption = this.placeholder;
		} else if (this.placeholder == null) {
			this.selectedOption = 'Select ...';
		}

		if (changes.selected) {
			this.tryToSelect(this.selected);
		}
	}

	openOptions(): void {
		this.setOpen(!this.open);
		this.initAnimationDisabled = false;
		this.changeDetectorRef.detectChanges();
	}

	clickOutside(event: any): void {
		if (!this.elementRef.nativeElement.contains(event.target)) {
			this.setOpen(false);
		}
	}

	setOpen(opened: boolean) {
		this.open = opened;

		if (this.open) {
			this.addClass('gui-options-opened');
		} else {
			this.removeClass('gui-options-opened');
		}
	}

	isOptionSelected(option: string): boolean {
		return option === this.selectedOption;
	}

	onSelect(option: string, optionIndex: number): void {
		this.selectedOption = option;
		this.optionChanged.emit(option);
		this.removeSelectedOption();
		this.setSelectedOption(optionIndex);
	}

	tryToSelect(option: string): void {
		if (this.options.indexOf(option) !== -1) {
			this.selectedOption = option;
		}
	}

	private setSelectedOption(optionIndex: number): void {
		const optionEl = this.optionListRef.nativeElement.querySelector('[data-option-index="' + optionIndex, '"]');
		this.renderer.addClass(optionEl, this.SELECTED_OPTION_CLASS_NAME);
	}

	private removeSelectedOption(): void {
		const selectedOptionEl = this.optionListRef.nativeElement.querySelector('.' + this.SELECTED_OPTION_CLASS_NAME);
		if (selectedOptionEl) {
			this.renderer.removeClass(selectedOptionEl, this.SELECTED_OPTION_CLASS_NAME);
		}
	}

	private addClass(className: string): void {
		this.renderer.addClass(this.elementRef.nativeElement, className);
	}

	private removeClass(className: string): void {
		this.renderer.removeClass(this.elementRef.nativeElement, className);
	}
}
