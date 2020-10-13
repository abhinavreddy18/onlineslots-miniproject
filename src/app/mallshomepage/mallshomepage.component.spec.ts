import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallshomepageComponent } from './mallshomepage.component';

describe('MallshomepageComponent', () => {
  let component: MallshomepageComponent;
  let fixture: ComponentFixture<MallshomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallshomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
