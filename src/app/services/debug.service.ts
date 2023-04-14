import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DebugService {
  constructor() {}

  info(message: string) {
    console.log(message);
  }
}
