import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIconComponent } from './details-icon.component';

describe('DetailsIconComponent', () => {
  let component: DetailsIconComponent;
  let fixture: ComponentFixture<DetailsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
