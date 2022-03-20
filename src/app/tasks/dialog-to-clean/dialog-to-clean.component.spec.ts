import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogToCleanComponent } from './dialog-to-clean.component';

describe('DialogToCleanComponent', () => {
  let component: DialogToCleanComponent;
  let fixture: ComponentFixture<DialogToCleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogToCleanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogToCleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
