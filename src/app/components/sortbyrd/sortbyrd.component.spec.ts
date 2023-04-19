import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyrdComponent } from './sortbyrd.component';

describe('SortbyrdComponent', () => {
  let component: SortbyrdComponent;
  let fixture: ComponentFixture<SortbyrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbyrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
