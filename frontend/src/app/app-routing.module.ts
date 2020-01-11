import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {CountryOptionsResolver} from './resolver/country-options.resolver';
import {ArmofserviceListComponent} from "./armofservice-list/armofservice-list.component";
import {ArmofserviceFormComponent} from "./armofservice-form/armofservice-form.component";
import {SoldierOptionsResolver} from "./resolver/soldier-options.resolver";
import {ArmofserviceResolver} from "./resolver/armofservice.resolver";
import {SoldierFormComponent} from "./soldier-form/soldier-form.component";
import {SoldierListComponent} from "./soldier-list/soldier-list.component";
import {SoldierResolver} from "./resolver/soldier.resolver";
import {ArmofserviceOptionsResolver} from "./resolver/armofserviceoptions.resolver";


const routes: Routes = [
  {path: '', redirectTo: 'arm_of_service-list', pathMatch: 'full'},
  {path: 'arm_of_service-list', component: ArmofserviceListComponent, canActivate: [AuthGuard]},
  {
    path: 'arm_of_service-form',
    component: ArmofserviceFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      countryOptions: CountryOptionsResolver,
    }
  },
  {
    path: 'arm_of_service-form/:id',
    component: ArmofserviceFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      countryOptions: CountryOptionsResolver,
      arm_of_service: ArmofserviceResolver,
    }
  },
  {path: 'login', component: LoginComponent},
  {path: 'soldier-list', component: SoldierListComponent, canActivate: [AuthGuard]},
  {
    path: 'soldier-form',
    component: SoldierFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      countryOptions: CountryOptionsResolver,
      armOfServiceOptions: ArmofserviceOptionsResolver,
    }
  },
  {
    path: 'soldier-form/:id',
    component: SoldierFormComponent,
    canActivate: [AuthGuard],
    resolve: {
      countryOptions: CountryOptionsResolver,
      armOfServiceOptions: ArmofserviceOptionsResolver,
      soldier: SoldierResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
