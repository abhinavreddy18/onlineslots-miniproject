import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperslotComponent } from './superslot.component';

describe('SuperslotComponent', () => {
  let component: SuperslotComponent;
  let fixture: ComponentFixture<SuperslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
