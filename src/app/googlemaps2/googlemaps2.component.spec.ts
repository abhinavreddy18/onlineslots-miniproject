import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Googlemaps2Component } from './googlemaps2.component';

describe('Googlemaps2Component', () => {
  let component: Googlemaps2Component;
  let fixture: ComponentFixture<Googlemaps2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Googlemaps2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Googlemaps2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
