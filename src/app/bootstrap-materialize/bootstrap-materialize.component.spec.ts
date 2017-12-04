import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapMaterializeComponent } from './bootstrap-materialize.component';

describe('BootstrapMaterializeComponent', () => {
  let component: BootstrapMaterializeComponent;
  let fixture: ComponentFixture<BootstrapMaterializeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapMaterializeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapMaterializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
