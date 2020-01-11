import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArmofserviceService {

  constructor(private http: HttpClient) { }

  getArmsOfService() {
    return this.http.get('/api/arm_of_service/list');
  }

  createArmOfService(arm_of_service) {
    return this.http.post('/api/arm_of_service/create', arm_of_service);
  }

  updateArmOfService(arm_of_service) {
    return this.http.put('/api/arm_of_service/' + arm_of_service.id + '/update', arm_of_service);
  }

  getArmOfService(id) {
    return this.http.get('/api/arm_of_service/' + id + '/get');
  }

  deleteArmOfService(arm_of_service) {
    return this.http.delete('/api/arm_of_service/' + arm_of_service.id + '/delete');
  }
}

