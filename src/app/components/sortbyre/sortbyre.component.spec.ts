import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbyreComponent } from './sortbyre.component';

describe('SortbyreComponent', () => {
  let component: SortbyreComponent;
  let fixture: ComponentFixture<SortbyreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbyreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbyreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
