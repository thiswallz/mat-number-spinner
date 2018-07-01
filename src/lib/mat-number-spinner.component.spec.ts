import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatNumberSpinnerComponent } from './mat-number-spinner.component';

describe('MatNumberSpinnerComponent', () => {
  let component: MatNumberSpinnerComponent;
  let fixture: ComponentFixture<MatNumberSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatNumberSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatNumberSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
