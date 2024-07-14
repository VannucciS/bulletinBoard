import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router) { }

  onSubmit(form: any) {
    console.log('Form Data: ', form.value);
    // Here you can call a service to send the form data to your server
  }

  registerUser(){
    this.router.navigate(['/login']);
  }

}