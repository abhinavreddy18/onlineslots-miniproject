import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsopitallistComponent } from './hsopitallist.component';

describe('HsopitallistComponent', () => {
  let component: HsopitallistComponent;
  let fixture: ComponentFixture<HsopitallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsopitallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsopitallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
