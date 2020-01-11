import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {ArmofserviceService} from "../service/armofservice.service";

@Injectable({
  providedIn: 'root'
})
export class ArmofserviceOptionsResolver implements Resolve<Observable<any>> {
  constructor(private armofserviceService: ArmofserviceService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.armofserviceService.getArmsOfService();
  }
}
