import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_TOKEN } from '../../constants';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup | FormGroup<any>;
  showPassword: boolean = false;

  constructor(private authService: AuthService,
              private router: Router,
              private fb: FormBuilder
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit(): void {
    this.form.addControl('email', new FormControl(null, [Validators.required, Validators.email]));
    this.form.addControl('password', new FormControl(null, [Validators.required]));
  }

  login(): void {
    this.authService.storeStorage(USER_TOKEN, 'test');
    this.router.navigate(['/admin']);
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
