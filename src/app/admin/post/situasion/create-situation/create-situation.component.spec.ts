import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSituationComponent } from './create-situation.component';

describe('CreateSituationComponent', () => {
  let component: CreateSituationComponent;
  let fixture: ComponentFixture<CreateSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
