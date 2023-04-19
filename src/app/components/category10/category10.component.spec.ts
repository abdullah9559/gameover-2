import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Category10Component } from './category10.component';

describe('Category10Component', () => {
  let component: Category10Component;
  let fixture: ComponentFixture<Category10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Category10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Category10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
