import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'about/:id',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
    children: [
      {
        path: 'userlist',
        component: UserListComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotfoundpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
