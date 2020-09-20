import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSlotComponent } from './super-slot.component';

describe('SuperSlotComponent', () => {
  let component: SuperSlotComponent;
  let fixture: ComponentFixture<SuperSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
