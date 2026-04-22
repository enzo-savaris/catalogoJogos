import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJogo } from './card-jogo';

describe('CardJogo', () => {
  let component: CardJogo;
  let fixture: ComponentFixture<CardJogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJogo],
    }).compileComponents();

    fixture = TestBed.createComponent(CardJogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
