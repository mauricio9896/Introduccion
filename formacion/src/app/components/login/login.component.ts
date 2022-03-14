import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public ojo = faEye;
  public ojoCerrado = faEyeSlash;

  public eyeOpened = false;
  public loginForm: FormGroup;
  public validition: boolean = false;

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
        usuario: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
      }
    );
  }

  eye(): void {
    this.eyeOpened = !this.eyeOpened;
  }

  login(): void {
    console.log(this.loginForm.value.usuario);
    console.log(this.loginForm.value.password);
    if (this.loginForm.invalid === false)
    {
      this.validition = true; 
    }
  }
}