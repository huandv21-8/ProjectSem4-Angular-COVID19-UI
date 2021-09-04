import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpidemicEvolutionComponent } from './epidemic-evolution.component';

describe('EpidemicEvolutionComponent', () => {
  let component: EpidemicEvolutionComponent;
  let fixture: ComponentFixture<EpidemicEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpidemicEvolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpidemicEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
