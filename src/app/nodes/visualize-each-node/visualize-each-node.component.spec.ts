import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeEachNodeComponent } from './visualize-each-node.component';

describe('VisualizeEachNodeComponent', () => {
  let component: VisualizeEachNodeComponent;
  let fixture: ComponentFixture<VisualizeEachNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizeEachNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeEachNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
