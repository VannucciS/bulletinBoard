import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { PostsToApproveComponent } from './admin/posts-to-approve/posts-to-approve.component';
import { UsersToApproveComponent } from './admin/users-to-approve/users-to-approve.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    AddPostComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    AdminComponent,
    PostsToApproveComponent,
    UsersToApproveComponent,
    NavbarAdminComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
