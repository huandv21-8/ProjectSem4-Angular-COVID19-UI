import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePeopleFormComponent } from './create-people-form.component';

describe('CreatePeopleFormComponent', () => {
  let component: CreatePeopleFormComponent;
  let fixture: ComponentFixture<CreatePeopleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePeopleFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePeopleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
