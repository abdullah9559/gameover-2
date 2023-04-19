import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category9Component } from './category9.component';

describe('Category9Component', () => {
  let component: Category9Component;
  let fixture: ComponentFixture<Category9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Category9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
