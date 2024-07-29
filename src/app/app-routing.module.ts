import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import {AdminComponent } from './admin/admin.component';
import { RoleGuard } from './guards/role.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationComponent},
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin' } },
  { path: 'unauthorized', component: UnauthorizedComponent },
  {path: 'post-list', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
