import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookPageComponent } from './logbook-page.component';

describe('LogbookPageComponent', () => {
  let component: LogbookPageComponent;
  let fixture: ComponentFixture<LogbookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
