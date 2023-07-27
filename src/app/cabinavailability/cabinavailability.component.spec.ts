import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinavailabilityComponent } from './cabinavailability.component';

describe('CabinavailabilityComponent', () => {
  let component: CabinavailabilityComponent;
  let fixture: ComponentFixture<CabinavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinavailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
