import {Component, OnInit} from '@angular/core';
import {SoldierService} from "../service/soldier.service";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-soldier-list',
  templateUrl: './soldier-list.component.html',
  styleUrls: ['./soldier-list.component.scss']
})
export class SoldierListComponent implements OnInit {

  soldiers: any[];
  displayedColumns = ['id', 'rank', 'first_name', 'last_name', 'year_of_birth', 'height', 'arm_of_service', "country"];

  constructor(private soldierService: SoldierService, private userService: UserService) {
  }

  ngOnInit() {
    this.soldierService.getSoldiers()
      .subscribe((response: any[]) => {
        this.soldiers = response;
        console.log(response);
      });
  }

  deleteSoldier(soldier: any) {
    this.soldierService.deleteSoldier(soldier)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
