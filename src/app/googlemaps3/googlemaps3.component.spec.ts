import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Googlemaps3Component } from './googlemaps3.component';

describe('Googlemaps3Component', () => {
  let component: Googlemaps3Component;
  let fixture: ComponentFixture<Googlemaps3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Googlemaps3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Googlemaps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
