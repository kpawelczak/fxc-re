import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FibCalcComponent } from './fib-calc.component';

describe('FibCalcComponent', () => {
  let component: FibCalcComponent;
  let fixture: ComponentFixture<FibCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FibCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FibCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
