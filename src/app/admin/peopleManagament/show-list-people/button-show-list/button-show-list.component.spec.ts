import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonShowListComponent } from './button-show-list.component';

describe('ButtonShowListComponent', () => {
  let component: ButtonShowListComponent;
  let fixture: ComponentFixture<ButtonShowListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonShowListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
