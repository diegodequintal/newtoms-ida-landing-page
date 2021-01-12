import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RwcComponent } from './rwc.component';

describe('RwcComponent', () => {
  let component: RwcComponent;
  let fixture: ComponentFixture<RwcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
