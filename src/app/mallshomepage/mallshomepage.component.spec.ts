import { ComponentFixture, TestBed } from '@angular/core/testing';

import { mallshomepageComponent } from './mallshomepage.component';

describe('mallshomepageComponent', () => {
  let component: mallshomepageComponent;
  let fixture: ComponentFixture<mallshomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ mallshomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(mallshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
