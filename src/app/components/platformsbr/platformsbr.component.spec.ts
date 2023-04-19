import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsbrComponent } from './platformsbr.component';

describe('PlatformsbrComponent', () => {
  let component: PlatformsbrComponent;
  let fixture: ComponentFixture<PlatformsbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformsbrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformsbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
