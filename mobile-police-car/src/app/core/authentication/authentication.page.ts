import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonInput,
  IonContent,
  IonButton,
  IonText,
  IonToast,
} from '@ionic/angular/standalone';
import { AuthenticationStateService } from './authentication.state.service';
import { AuthModel } from './models/auth.model';
import { MessageAlertComponent } from 'src/app/shared/components/message-alert-toast/message-alert-toast.component';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
  imports: [
    IonInput,
    IonContent,
    IonButton,
    IonText,
    ReactiveFormsModule,
    FormsModule,
    MessageAlertComponent
  ],
})
export class AuthenticationPage implements OnInit {
  formBuilder = inject(FormBuilder);
  formAuth;
  errorMessage = 'Password invalid, enter your password again';

  constructor(private authenticationStateService: AuthenticationStateService) {
    this.formAuth = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  getFormErrors(controlName: string) {
    const control = this.formAuth.get(controlName);
    if (control?.touched && control.errors !== null) {
      return true;
    }
    return false;
  }

  logIn() {
    this.formAuth.markAllAsTouched();
    const hasErrors = this.formAuth.invalid;
    if (!hasErrors) {
      const formProperties = this.formAuth.getRawValue();
      const userCredentials: AuthModel = {
        username: formProperties.username as string,
        password: formProperties.password as string,
      };
      this.authenticationStateService.logIn(userCredentials);
    }
  }
}
