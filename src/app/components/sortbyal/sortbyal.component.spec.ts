import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyalComponent } from './sortbyal.component';

describe('SortbyalComponent', () => {
  let component: SortbyalComponent;
  let fixture: ComponentFixture<SortbyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
