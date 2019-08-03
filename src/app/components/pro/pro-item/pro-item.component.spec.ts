import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProItemComponent } from './pro-item.component';

describe('ProItemComponent', () => {
  let component: ProItemComponent;
  let fixture: ComponentFixture<ProItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
