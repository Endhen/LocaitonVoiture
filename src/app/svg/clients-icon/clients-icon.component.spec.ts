import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsIconComponent } from './clients-icon.component';

describe('ClientsIconComponent', () => {
  let component: ClientsIconComponent;
  let fixture: ComponentFixture<ClientsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
