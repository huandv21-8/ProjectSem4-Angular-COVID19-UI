import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListAccountComponent } from './show-list-account.component';

describe('ShowListAccountComponent', () => {
  let component: ShowListAccountComponent;
  let fixture: ComponentFixture<ShowListAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
