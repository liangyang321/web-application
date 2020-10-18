import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPortComponent } from './air-port.component';

describe('AirPortComponent', () => {
  let component: AirPortComponent;
  let fixture: ComponentFixture<AirPortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
