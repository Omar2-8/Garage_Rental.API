import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentGarageComponent } from './rent-garage.component';

describe('RentGarageComponent', () => {
  let component: RentGarageComponent;
  let fixture: ComponentFixture<RentGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
