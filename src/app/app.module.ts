import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { UsdtopkrPipe } from './usdtopkr.pipe';
import { UsdpkrPipe } from './pipes/usdpkr.pipe';
import { RedElDirective } from './red-el.directive';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { HttpClientModule } from '@angular/common/http';
import { ApicallingComponent } from './apicalling/apicalling.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    HeaderComponent,
    TodoComponent,
    ChildcomponentComponent,
    UserDetailsComponent,
    ChildtoparentComponent,
    TwowaybindingComponent,
    UsdtopkrPipe,
    UsdpkrPipe,
    RedElDirective,
    NotfoundpageComponent,
    ApicallingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
