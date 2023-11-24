import { Component } from '@angular/core';
import { PostDataService } from '../services/post-data.service';

@Component({
  selector: 'app-apicalling',
  templateUrl: './apicalling.component.html',
  styleUrl: './apicalling.component.css',
})
export class ApicallingComponent {
  posts: any;

  constructor(private postData: PostDataService) {
    postData.posts().subscribe((data) => {
      console.log(data);
      this.posts = data;
    });
  }

  getPostFormData(data: any) {
    this.postData.savePost(data).subscribe((res) => {
      console.log(res);
    });
  }
}
