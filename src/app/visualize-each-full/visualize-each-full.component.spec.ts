import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeEachFullComponent } from './visualize-each-full.component';

describe('VisualizeEachFullComponent', () => {
  let component: VisualizeEachFullComponent;
  let fixture: ComponentFixture<VisualizeEachFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeEachFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeEachFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
