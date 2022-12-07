import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsMonthlyComponent } from './reports-monthly.component';

describe('ReportsMonthlyComponent', () => {
  let component: ReportsMonthlyComponent;
  let fixture: ComponentFixture<ReportsMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsMonthlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
