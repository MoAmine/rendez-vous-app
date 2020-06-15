import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrvComponent } from './addrv.component';

describe('AddrvComponent', () => {
  let component: AddrvComponent;
  let fixture: ComponentFixture<AddrvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
