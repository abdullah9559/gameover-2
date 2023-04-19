import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category11Component } from './category11.component';

describe('Category11Component', () => {
  let component: Category11Component;
  let fixture: ComponentFixture<Category11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Category11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
