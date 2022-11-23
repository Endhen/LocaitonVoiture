import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationIconComponent } from './reservation-icon.component';

describe('ReservationIconComponent', () => {
  let component: ReservationIconComponent;
  let fixture: ComponentFixture<ReservationIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
