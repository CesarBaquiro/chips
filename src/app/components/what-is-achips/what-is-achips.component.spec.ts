import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAChipsComponent } from './what-is-achips.component';

describe('WhatIsAChipsComponent', () => {
  let component: WhatIsAChipsComponent;
  let fixture: ComponentFixture<WhatIsAChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAChipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatIsAChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
