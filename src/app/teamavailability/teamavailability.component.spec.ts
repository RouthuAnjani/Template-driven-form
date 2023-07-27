import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamavailabilityComponent } from './teamavailability.component';

describe('TeamavailabilityComponent', () => {
  let component: TeamavailabilityComponent;
  let fixture: ComponentFixture<TeamavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamavailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
