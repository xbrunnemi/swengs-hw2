import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {DateComponent} from './date/date.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {BarRatingModule} from 'ngx-bar-rating';
import {LoginComponent} from './login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {LogoutComponent} from './logout/logout.component';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {HttperrorInterceptor} from './httperror.interceptor';
import {FileUploadModule} from 'ng2-file-upload';
import { ArmofserviceFormComponent } from './armofservice-form/armofservice-form.component';
import { ArmofserviceListComponent } from './armofservice-list/armofservice-list.component';
import {SoldierListComponent} from "./soldier-list/soldier-list.component";
import {SoldierFormComponent} from "./soldier-form/soldier-form.component";
import {RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module} from "ng-recaptcha";

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    SoldierListComponent,
    SoldierFormComponent,
    DateComponent,
    LoginComponent,
    LogoutComponent,
    ArmofserviceFormComponent,
    ArmofserviceListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    BarRatingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    MatSnackBarModule,
    FileUploadModule,
    RecaptchaV3Module,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttperrorInterceptor,
      multi: true,
      deps: [MatSnackBar]
    },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LePbc4UAAAAAPfmoCAP9GmPgi5SSW0rHXnxLVXQ' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
