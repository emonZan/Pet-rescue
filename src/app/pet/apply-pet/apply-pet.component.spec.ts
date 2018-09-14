import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPetComponent } from './apply-pet.component';

describe('ApplyPetComponent', () => {
  let component: ApplyPetComponent;
  let fixture: ComponentFixture<ApplyPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
