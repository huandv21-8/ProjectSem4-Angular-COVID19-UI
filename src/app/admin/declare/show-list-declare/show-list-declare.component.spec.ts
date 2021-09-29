import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowListDeclareComponent } from './show-list-declare.component';

describe('ShowListDeclareComponent', () => {
  let component: ShowListDeclareComponent;
  let fixture: ComponentFixture<ShowListDeclareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowListDeclareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowListDeclareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
