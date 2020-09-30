import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLoggingSystemComponent } from './login-logging-system.component';

describe('LoginLoggingSystemComponent', () => {
  let component: LoginLoggingSystemComponent;
  let fixture: ComponentFixture<LoginLoggingSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginLoggingSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLoggingSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
