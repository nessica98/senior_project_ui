import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePageEachnodeComponent } from './visualize-page-eachnode.component';

describe('VisualizePageEachnodeComponent', () => {
  let component: VisualizePageEachnodeComponent;
  let fixture: ComponentFixture<VisualizePageEachnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizePageEachnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizePageEachnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
