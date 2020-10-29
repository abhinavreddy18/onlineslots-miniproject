import { ComponentFixture, TestBed } from '@angular/core/testing';

import { banklistComponent } from './banklist.component';

describe('banklistComponent', () => {
  let component: banklistComponent;
  let fixture: ComponentFixture<banklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ banklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(banklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
