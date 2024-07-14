import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { RegistrationDataService } from '../service/registration-data.service';
import { RegisterModel } from '../model/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public user: RegisterModel;

  constructor(private router: Router, private registrationDataService: RegistrationDataService) {
    this.user = {
      name: '',
      email: '',
      username: '',
      password: ''
    };
   }

  onSubmit(form: any) {
    console.log('Form Data: ', form.value);
    console.log('User Data: ', this.user);
    this.registrationDataService.setRegistrationData(form.value);
    alert('Your registration will be analyzed and the authorization to access the site will be send by email.');
    this.router.navigate(['/login']);
  }

  registerUser(){
    //console.log('User Data: ', this.user);
    //alert('Your registration will be analyzed and the authorization to access the site will be send by email.');
    //this.router.navigate(['/login']);
  }

}