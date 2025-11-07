import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// standalone
import { NavbarComponent } from './components/navbar/navbar';
import { UserList } from './components/user-list/user-list';
import { UserDetails } from './components/user-details/user-details';
import { Home } from './pages/home/home';
import { Users } from './pages/users/users';

@NgModule({
  declarations: [AppComponent], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    NavbarComponent,
    UserList,
    UserDetails,
    Home,
    Users,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
