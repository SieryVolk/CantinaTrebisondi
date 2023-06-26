import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  formVar!: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.formVar = this.fb.group({
      email: '',
      password: '',
    })
  }

  // ngOnInit() : void {
  // }

  onSubmit() {
    const email = this.formVar.value.email;
    const password = this.formVar.value.password;
    console.log(email, password);
    console.log(this.formVar.value);
    this.authService.signUp({email: email, password:password, returnSecureToken: true}).subscribe(data => {
      console.log(data);
    })
  }
}
