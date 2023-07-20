import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  passwordStrength: number = 0;

  checkPasswordStrength(event: Event) {
    const password = (event.target as HTMLInputElement).value;
    this.passwordStrength = this.calculatePasswordStrength(password);
  }

  calculatePasswordStrength(password: string): number {
    if (password.length === 0) {
      return 0;
    }

    if (password.length < 8) {
      return 1;
    }

    let strength = 1;

    //RegEx for lower and uppercase letter
    if (password.match(/([a-zA-Z])/)) {
      strength += 1;
    }
    //RegEx for digit
    if (password.match(/([0-9])/)) {
      strength += 1;
    }
    //Regex for symbols
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~,{,}])/)) {
      strength += 1;
    }

    // 0 - grey
    // 1 - red 
    // 2 - easy 
    // 3 - medium 
    // 4 - strong
    return strength

  }

  submit(register: any) {
    console.log('Submit button clicked.', register);
  }

}
