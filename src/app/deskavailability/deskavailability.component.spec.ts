import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskavailabilityComponent } from './deskavailability.component';

describe('DeskavailabilityComponent', () => {
  let component: DeskavailabilityComponent;
  let fixture: ComponentFixture<DeskavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskavailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
