import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SoldierService {

  constructor(private http: HttpClient) { }

  getSoldiers() {
    return this.http.get('/api/soldier/list');
  }

  createSoldier(soldier) {
    return this.http.post('/api/soldier/create', soldier);
  }

  updateSoldier(soldier) {
    return this.http.put('/api/soldier/' + soldier.id + '/update', soldier);
  }

  getSoldier(id) {
    return this.http.get('/api/soldier/' + id + '/get');
  }

  deleteSoldier(soldier) {
    return this.http.delete('/api/soldier/' + soldier.id + '/delete');
  }

}
