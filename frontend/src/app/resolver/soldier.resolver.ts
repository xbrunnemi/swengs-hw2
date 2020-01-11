import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SoldierService} from '../service/soldier.service';

@Injectable({
  providedIn: 'root'
})
export class SoldierResolver implements Resolve<Observable<any>> {
  constructor(private soldierService: SoldierService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.soldierService.getSoldier(route.params.id);
  }
}
