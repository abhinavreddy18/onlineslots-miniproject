import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeojsonComponent } from './geojson.component';

describe('GeojsonComponent', () => {
  let component: GeojsonComponent;
  let fixture: ComponentFixture<GeojsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeojsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
