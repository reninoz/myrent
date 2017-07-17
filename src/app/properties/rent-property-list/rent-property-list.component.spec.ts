import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPropertyListComponent } from './rent-property-list.component';

describe('RentPropertyListComponent', () => {
  let component: RentPropertyListComponent;
  let fixture: ComponentFixture<RentPropertyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPropertyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
