import { Injectable } from '@angular/core';
import { RegisterModel } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {
  private registrationData: RegisterModel | null = null;

  constructor() { }

  setRegistrationData(data: RegisterModel) {
    this.registrationData = data;
  }

  getRegistrationData(): RegisterModel | null {
    return this.registrationData;
  }
}
