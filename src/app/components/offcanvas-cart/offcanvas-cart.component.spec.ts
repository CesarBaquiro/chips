import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffcanvasCartComponent } from './offcanvas-cart.component';

describe('OffcanvasCartComponent', () => {
  let component: OffcanvasCartComponent;
  let fixture: ComponentFixture<OffcanvasCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffcanvasCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffcanvasCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
