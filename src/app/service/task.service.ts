import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Tasks } from '../model/tasks';

export class TaskService {
  subject: BehaviorSubject<Tasks>;
  observable: Observable<Tasks>;
  task: Tasks;
  constructor() {
    this.subject = new BehaviorSubject<Tasks>(null);
    this.observable = this.subject.asObservable();
    this.task = new Tasks();
  }
  setTask(task: Tasks) {
    this.subject.next(task);
  }
}
