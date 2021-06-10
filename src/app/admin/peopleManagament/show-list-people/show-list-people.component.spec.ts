import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListPeopleComponent } from './show-list-people.component';

describe('ShowListPeopleComponent', () => {
  let component: ShowListPeopleComponent;
  let fixture: ComponentFixture<ShowListPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
