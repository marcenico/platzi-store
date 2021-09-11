import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const user = this.form.value as { email: string; password: string };
      this.authService
        .createUser(user.email, user.password)
        .then(() => {
          this.router.navigate(['/auth/login']);
        })
        .catch(() => alert('no es valido'));
    }
  }
}
