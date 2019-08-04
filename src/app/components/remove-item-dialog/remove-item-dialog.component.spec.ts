import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveItemDialogComponent } from './remove-item-dialog.component';

describe('RemoveItemDialogComponent', () => {
  let component: RemoveItemDialogComponent;
  let fixture: ComponentFixture<RemoveItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
