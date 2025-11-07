import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import {  Users } from './pages/users/users';

const routes: Routes = [
  { path: '', component: Home },     // Home par défaut
  { path: 'users', component: Users } // Page Users
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
