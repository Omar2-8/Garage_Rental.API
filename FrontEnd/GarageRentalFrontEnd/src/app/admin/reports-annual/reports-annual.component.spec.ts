import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsAnnualComponent } from './reports-annual.component';

describe('ReportsAnnualComponent', () => {
  let component: ReportsAnnualComponent;
  let fixture: ComponentFixture<ReportsAnnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsAnnualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsAnnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
