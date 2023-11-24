import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularApp';
  randomText = 'Some Random text';

  displayval = '';
  count = 0;
  name = 'Akbar';
  disable = true;

  show = true;

  isLoggedIn = true;

  users = ['Ali', 'Akbar', 'Misbah', 'Ronaldo'];

  usersDetails = [
    { name: 'Ali', email: 'ali@abc.com', phone: '+12345' },
    { name: 'Akbar', email: 'Akbar@abc.com', phone: '+12345' },
    { name: 'Imran', email: 'Imran@abc.com', phone: '+12345' },
    { name: 'Khan', email: 'Khan@abc.com', phone: '+12345' },
  ];

  nestedUsers = [
    {
      name: 'Ali',
      email: 'ali@abc.com',
      socialAccounts: ['facebook', 'twitter'],
    },
    {
      name: 'Akbar',
      email: 'Akbar@abc.com',
      socialAccounts: ['instagram', 'twitter'],
    },
    {
      name: 'Imran',
      email: 'Imran@abc.com',
      socialAccounts: ['whatsapp', 'twitter'],
    },
  ];

  color = 'red';
  bgColor = 'orange';

  getValue() {
    return 'Learning Angular';
  }

  getAlert(name: string) {
    alert('name');
  }

  getData(val: string) {
    console.log(val);
  }

  getdisplayvalue(val: string) {
    this.displayval = val;
  }

  counter(type: string) {
    if (this.count == 0) {
      this.count++;
    }
    type == '+' ? this.count++ : this.count--;
  }

  getIfElse() {
    if (this.show == true) {
      this.show = false;
    } else if (this.show == false) {
      this.show = true;
    }
  }

  updateColor() {
    this.color = 'blue';
    this.bgColor = 'gray';
  }

  dataForChild = 'this is data for child';

  userDetails = [
    { name: 'User1', email: 'user1@abc.com' },
    { name: 'User2', email: 'user2@abc.com' },
    { name: 'User3', email: 'user3@abc.com' },
    { name: 'User4', email: 'user4@abc.com' },
    { name: 'User5', email: 'user5@abc.com' },
  ];

  newData = '';

  updateData(item: string) {
    this.newData = item;
    console.log(item);
  }

  callbtn(item: any) {
    console.log(item);
  }

  today = Date();

  userObject = {
    name: 'Akbar',
    age: 23,
  };

  usersData: any = [];

  constructor(private userdata: UserdataService) {
    this.usersData = userdata.user();
  }
}
