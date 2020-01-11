import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SoldierService} from '../service/soldier.service';

@Injectable({
  providedIn: 'root'
})
export class SoldierOptionsResolver implements Resolve<Observable<any>> {
  constructor(private soldierService: SoldierService) {
  }

  resolve() {
    return this.soldierService.getSoldiers();
  }
}
