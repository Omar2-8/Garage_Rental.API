import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveGarageComponent } from './reserve-garage.component';

describe('ReserveGarageComponent', () => {
  let component: ReserveGarageComponent;
  let fixture: ComponentFixture<ReserveGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserveGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
