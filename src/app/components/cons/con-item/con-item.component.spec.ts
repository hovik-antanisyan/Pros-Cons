import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConItemComponent } from './con-item.component';

describe('ConItemComponent', () => {
  let component: ConItemComponent;
  let fixture: ComponentFixture<ConItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
