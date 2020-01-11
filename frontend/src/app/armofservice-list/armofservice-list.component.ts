import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";
import {ArmofserviceService} from "../service/armofservice.service";

@Component({
  selector: 'app-armofservice-list',
  templateUrl: './armofservice-list.component.html',
  styleUrls: ['./armofservice-list.component.scss']
})
export class ArmofserviceListComponent implements OnInit {

  armOfServices: any[];
  displayedColumns = ['id', 'name', 'short_name', 'annotation', 'in_action', 'country_name'];

  constructor(private armofserviceService: ArmofserviceService, private userService: UserService) { }

  ngOnInit() {
    this.armofserviceService.getArmsOfService()
      .subscribe((response: any[]) =>{
        this.armOfServices = response;
      });
  }

  deleteArmOfService(arm_of_service: any) {
    this.armofserviceService.deleteArmOfService(arm_of_service)
      .subscribe(() => {
        this.ngOnInit();
      });
  }
}
