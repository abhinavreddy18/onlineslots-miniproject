import { ComponentFixture, TestBed } from '@angular/core/testing';

import { bankhomepageComponent } from './bankhomepage.component';

describe('bankhomepageComponent', () => {
  let component: bankhomepageComponent;
  let fixture: ComponentFixture<bankhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ bankhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(bankhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
