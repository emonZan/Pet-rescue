import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyVolunteerComponent } from './apply-volunteer.component';

describe('ApplyVolunteerComponent', () => {
  let component: ApplyVolunteerComponent;
  let fixture: ComponentFixture<ApplyVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
