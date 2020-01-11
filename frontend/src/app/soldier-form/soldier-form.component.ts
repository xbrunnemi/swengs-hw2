import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {SoldierService} from "../service/soldier.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {RankService} from "../service/rank.service";

@Component({
  selector: 'app-soldier-form',
  templateUrl: './soldier-form.component.html',
  styleUrls: ['./soldier-form.component.scss']
})
export class SoldierFormComponent implements OnInit {

  countryOptions;
  soldierFormGroup;
  armOfServiceOptions;
  options: any;

  constructor(private fb: FormBuilder, private soldierService: SoldierService, private route: ActivatedRoute,
              private router: Router, private rankService: RankService) { }

  ngOnInit() {

    this.options = {'format': 'yyyy'};

    const data = this.route.snapshot.data;
    this.countryOptions = data.countryOptions;
    this.armOfServiceOptions = data.armOfServiceOptions;

    this.soldierFormGroup = this.fb.group({
      'id': [null],
      'rank': [null],
      'first_name': ['', [Validators.required]],
      'last_name': ['', [Validators.required]],
      'year_of_birth': [null, [Validators.required]],
      'height': ['', [Validators.required]],
      'arm_of_service': [null],
      'country': [null],
    });

    if (data.soldier) {
      this.soldierFormGroup.patchValue(data.soldier);
      this.options = {'yearStart': data.soldier.year_of_birth, 'format': 'yyyy'};
    }

  }


  createSoldier() {
    const soldier = this.soldierFormGroup.value;
    if (soldier.id) {
      this.soldierService.updateSoldier(soldier)
        .subscribe(() => {
          alert('updated successfully');
        });
    } else {
      this.soldierService.createSoldier(soldier)
        .subscribe((response: any) => {
          this.router.navigate(['/soldier-form/' + response.id]);
        });
    }
  }

  badWordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /bad word/.test(control.value);
      return forbidden ? {'badWord': {value: control.value}} : null;
    };
  }
}
