import { BehaviorSubject, Observable, Subject } from 'rxjs';

export class LastCleanService {
  subject: BehaviorSubject<Date>;
  observable: Observable<Date>;

  constructor() {
    this.subject = new BehaviorSubject<Date>(null);
    this.observable = this.subject.asObservable();
  }
  setLastClean(data: Date) {
    this.subject.next(data);
  }
}
