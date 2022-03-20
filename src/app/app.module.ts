import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { UsersComponent } from './users/users.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LayoutComponent } from './layout/layout.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { DialogTasksComponent } from './tasks/dialog-tasks/dialog-tasks.component';
import { DialogEliminaTaskComponent } from './tasks/dialog-elimina-task/dialog-elimina-task.component';
import { DialogToCleanComponent } from './tasks/dialog-to-clean/dialog-to-clean.component';
import { DialogUsersComponent } from './users/dialog-users/dialog-users.component';
import { DialogEliminaUsersComponent } from './users/dialog-elimina-users/dialog-elimina-users.component';
import { PulitoreService } from './service/pulitore.service';
import { TaskService } from './service/task.service';
import { LastCleanService } from './service/lastclean.service';
import { FrequenzaService } from './service/frequenza.service';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UsersComponent,
    LayoutComponent,
    CreateModalComponent,
    DialogTasksComponent,
    DialogEliminaTaskComponent,
    DialogToCleanComponent,
    DialogUsersComponent,
    DialogEliminaUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [PulitoreService, TaskService, LastCleanService, FrequenzaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
