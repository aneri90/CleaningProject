import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminaUsersComponent } from './dialog-elimina-users.component';

describe('DialogEliminaUsersComponent', () => {
  let component: DialogEliminaUsersComponent;
  let fixture: ComponentFixture<DialogEliminaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEliminaUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEliminaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
