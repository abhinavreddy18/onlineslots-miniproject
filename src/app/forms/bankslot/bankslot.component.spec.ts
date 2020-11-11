import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankslotComponent } from './bankslot.component';

describe('BankslotComponent', () => {
  let component: BankslotComponent;
  let fixture: ComponentFixture<BankslotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankslotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
