import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallslistComponent } from './mallslist.component';

describe('MallslistComponent', () => {
  let component: MallslistComponent;
  let fixture: ComponentFixture<MallslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
