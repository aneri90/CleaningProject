import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Tasks } from '../model/tasks';

export class PulitoreService {
  subject: BehaviorSubject<string>;
  observable: Observable<string>;
  task: Tasks;
  constructor() {
    this.subject = new BehaviorSubject<string>(null);
    this.observable = this.subject.asObservable();
    this.task = new Tasks();
  }
  setPulitore(pulitore: string) {
    this.subject.next(pulitore);
  }
}
