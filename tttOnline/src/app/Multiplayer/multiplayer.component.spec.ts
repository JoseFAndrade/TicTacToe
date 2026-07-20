import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Multiplayer } from './multiplayer.component';

describe('Multi', () => {
  let component: Multiplayer;
  let fixture: ComponentFixture<Multiplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Multiplayer],
    }).compileComponents();

    fixture = TestBed.createComponent(Multiplayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
