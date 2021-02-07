import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  msg: string = "";
  showError = new Subject<void>();
  constructor() { }
}
