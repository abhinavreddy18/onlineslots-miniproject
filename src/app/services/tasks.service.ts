import { Injectable } from '@angular/core';
import { Slots } from 'src/shared/slots';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  slot : Slots;
  constructor() { }
}
