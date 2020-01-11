import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";

import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ArmofserviceService} from "../service/armofservice.service";

@Component({
  selector: 'app-armofservice-form',
  templateUrl: './armofservice-form.component.html',
  styleUrls: ['./armofservice-form.component.scss']
})
export class ArmofserviceFormComponent implements OnInit {

  countryOptions;
  armOfServiceFormGroup;

  constructor(private fb: FormBuilder, private armOfServiceService: ArmofserviceService, private route: ActivatedRoute,
              private router: Router, private userService: UserService) { }

  ngOnInit() {

    const data = this.route.snapshot.data;
    this.countryOptions = data.countryOptions;

    this.armOfServiceFormGroup = this.fb.group({
      'id': [null],
      'name': ['', [Validators.required]],
      'short_name': ['', [Validators.required]],
      'founding_year': [null, [Validators.required]],
      'annotation': ['', [Validators.required, this.badWordValidator()]],
      'in_action': [false],
      'country': [null],
    });

    if (data.arm_of_service) {
      this.armOfServiceFormGroup.patchValue(data.arm_of_service);
    }

  }


  createArmOfService() {
    const arm_of_service = this.armOfServiceFormGroup.value;
    if (arm_of_service.id) {
      this.armOfServiceService.updateArmOfService(arm_of_service)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.armOfServiceService.createArmOfService(arm_of_service)
        .subscribe((response: any) => {
          this.router.navigate(['/arm_of_service-form/' + response.id]);
        });
    }
  }

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /bad word/.test(control.value);
      return forbidden ? {'badWord': {value: control.value}} : null;
    };
  }

  titleValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.armOfServiceService.getArmsOfService()
        .pipe(
          map((armOfServices: any[]) => {
            const currentId = this.armOfServiceFormGroup.controls.id.value;
            const currentTitle = this.armOfServiceFormGroup.controls.title.value;
            const armOfServiceWithSameName = armOfServices.find((m) => {
              return (currentId || m.id !== currentId) && m.title === currentTitle
            });
            if (armOfServiceWithSameName) {
              return {
                armAlreadyExists: true
              };
            } else {
              return null;
            }
          })
        );
    }
  }


}
