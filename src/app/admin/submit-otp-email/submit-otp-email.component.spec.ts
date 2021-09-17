import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitOtpEmailComponent } from './submit-otp-email.component';

describe('SubmitOtpEmailComponent', () => {
  let component: SubmitOtpEmailComponent;
  let fixture: ComponentFixture<SubmitOtpEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitOtpEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitOtpEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
