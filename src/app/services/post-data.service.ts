import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  constructor(private http: HttpClient) {}
  url = 'https://jsonplaceholder.typicode.com/posts';
  posts() {
    return this.http.get(this.url);
  }
  savePost(data: any) {
    return this.http.post(this.url, data);
  }
}
