import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTasksComponent } from './dialog-tasks.component';

describe('DialogTasksComponent', () => {
  let component: DialogTasksComponent;
  let fixture: ComponentFixture<DialogTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
