import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {
  constructor() {}

  user() {
    return [
      { name: 'ali', age: 20, email: 'ali@abc.com' },
      { name: 'abc', age: 25, email: 'xyz@abc.com' },
      { name: 'misbah', age: 21, email: 'misbah@abc.com' },
    ];
  }
}
