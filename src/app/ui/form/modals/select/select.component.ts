import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnChanges,
	Output,
	Renderer2,
	SimpleChanges,
	ViewChild,
	ViewEncapsulation
} from '@angular/core';

@Component({
	selector: 'gui-select',
	templateUrl: `select.component.html`,
	styleUrls: [
		'select.scss',
		'./themes/select.dark.scss',
		'./themes/select.material.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	host: {
		'[class.gui-select]': 'true'
	}
})
export class SelectComponent implements OnChanges {

	@ViewChild('optionlist')
	optionListRef: ElementRef;

	@ViewChild('container')
	containerRef: ElementRef;

	@HostListener('window:resize')
	onResize() {
		this.windowSize = window.innerHeight;
	}

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
	optionChanged = new EventEmitter<string>();

	selectedOption: string;

	initAnimationDisabled: boolean = true;

	windowSize: number;

	private canOpenDownward: boolean;

	private canOpenUpward: boolean;

	private open: boolean = false;

	private readonly SELECTED_OPTION_CLASS_NAME = 'gui-selected-option';

	constructor(private elementRef: ElementRef,
				private renderer: Renderer2,
				private changeDetectorRef: ChangeDetectorRef) {
		this.onResize();
	}

	ngOnChanges(changes: SimpleChanges) {

		if (changes.placeholder) {
			this.selectedOption = this.placeholder;
		} else if (this.placeholder === undefined) {
			this.selectedOption = 'Select ...';
		}

		if (changes.selected) {
			this.tryToSelect(this.selected);
		}
	}

	calculateDirection(): void {
		const containerEl = this.containerRef.nativeElement,
			containerHeight = containerEl.offsetHeight,
			rectBottom = containerEl.getBoundingClientRect().bottom,
			optionsHeight = containerHeight * this.options.length,
			availableBottomSpace = this.windowSize - rectBottom - optionsHeight,
			availableTopSpace = rectBottom - optionsHeight - containerHeight;

		this.canOpenUpward = availableTopSpace > 0;
		this.canOpenDownward = availableBottomSpace > 0;
	}

	tryToOpen(event: any): void {

		if (this.isContainerDisabled(event)) {
			event.stopPropagation();
		} else {
			this.toggleOptions(!this.open);
			this.initAnimationDisabled = false;
			this.changeDetectorRef.detectChanges();
		}
	}

	clickOutside(event: any): void {
		if (this.isContainerClicked(event)) {
			this.toggleOptions(false);
		}
	}

	toggleOptions(opened: boolean) {
		this.open = opened;

		if (this.open) {
			this.openOptions();
		} else {
			this.closeOptions();
		}
	}

	isOptionSelected(option: string): boolean {
		return option === this.selectedOption;
	}

	onSelect(option: string, optionIndex: number): void {
		this.emitSelectedOption(option);
		this.selectedOption = option;
		this.removeSelectedOption();
		this.setSelectedOption(optionIndex);
	}

	tryToSelect(option: string): void {
		if (this.options.indexOf(option) !== -1) {
			this.selectedOption = option;
		}
	}

	private emitSelectedOption(option: string): void {
		if (!this.isOptionSelected(option)) {
			this.optionChanged.emit(option);
		}
	}

	private openOptions(): void {
		this.calculateDirection();

		if (this.canOpenDownward || !this.canOpenUpward) {
			this.openDownward();
		} else {
			this.openUpward();
		}
	}

	private openDownward(): void {
		this.addClass('gui-options-opened');
		this.addClass('gui-downward');
		this.removeClass('gui-upward');
	}

	private openUpward(): void {
		this.addClass('gui-options-opened');
		this.addClass('gui-upward');
		this.removeClass('gui-downward');
	}

	private closeOptions(): void {
		const optionsElHasOpenClass = this.elementRef.nativeElement.classList.contains('gui-options-opened');

		if (optionsElHasOpenClass) {
			this.removeClass('gui-options-opened');
		}

		if (!optionsElHasOpenClass) {
			this.initAnimationDisabled = true;
		}
	}

	private isContainerClicked(event: any): boolean {
		return !this.elementRef.nativeElement.contains(event.target);
	}

	private isContainerDisabled(event: any): boolean {
		return event.target.classList.contains('gui-disabled');
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
