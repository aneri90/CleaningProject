import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminaTaskComponent } from './dialog-elimina-task.component';

describe('DialogEliminaTaskComponent', () => {
  let component: DialogEliminaTaskComponent;
  let fixture: ComponentFixture<DialogEliminaTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEliminaTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEliminaTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
