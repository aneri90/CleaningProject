import { BehaviorSubject, Observable, Subject } from 'rxjs';

export class FrequenzaService {
  subject: BehaviorSubject<number>;
  observable: Observable<number>;

  constructor() {
    this.subject = new BehaviorSubject<number>(null);
    this.observable = this.subject.asObservable();
  }
  setFrequenza(frequenza: number) {
    this.subject.next(frequenza);
  }
}
