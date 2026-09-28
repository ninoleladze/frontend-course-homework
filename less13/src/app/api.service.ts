import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  public traileri:Subject<any>=new Subject()


public meoretraileri:BehaviorSubject<any>=new BehaviorSubject("step")
}
