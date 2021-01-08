import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizePageNewComponent } from './visualize-page-new.component';

describe('VisualizePageNewComponent', () => {
  let component: VisualizePageNewComponent;
  let fixture: ComponentFixture<VisualizePageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizePageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizePageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
