import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeModalComponent } from './visualize-modal.component';

describe('VisualizeModalComponent', () => {
  let component: VisualizeModalComponent;
  let fixture: ComponentFixture<VisualizeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
