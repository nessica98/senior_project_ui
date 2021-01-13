import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbookdetailComponent } from './logbookdetail.component';

describe('LogbookdetailComponent', () => {
  let component: LogbookdetailComponent;
  let fixture: ComponentFixture<LogbookdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogbookdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbookdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
