import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  data: any = {};

  getFormData(data: any) {
    console.log(data);
    this.data = data;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log('user id is: ', this.route.snapshot.paramMap.get('id'));
  }
}
