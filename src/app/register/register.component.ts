import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
}
