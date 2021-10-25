import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareDetailQrcodeComponent } from './declare-detail-qrcode.component';

describe('DeclareDetailQrcodeComponent', () => {
  let component: DeclareDetailQrcodeComponent;
  let fixture: ComponentFixture<DeclareDetailQrcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareDetailQrcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareDetailQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
