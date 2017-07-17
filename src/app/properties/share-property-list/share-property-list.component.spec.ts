import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePropertyListComponent } from './share-property-list.component';

describe('SharePropertyListComponent', () => {
  let component: SharePropertyListComponent;
  let fixture: ComponentFixture<SharePropertyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharePropertyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharePropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
