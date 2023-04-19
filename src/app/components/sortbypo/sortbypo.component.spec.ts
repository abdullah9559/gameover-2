import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbypoComponent } from './sortbypo.component';

describe('SortbypoComponent', () => {
  let component: SortbypoComponent;
  let fixture: ComponentFixture<SortbypoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbypoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbypoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
