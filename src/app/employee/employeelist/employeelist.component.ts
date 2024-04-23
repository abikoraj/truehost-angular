import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Setting } from 'src/app/Model/setting';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { TitleService } from 'src/app/services/title.service';
import { EmployeeList } from '../employeelist.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  employees: EmployeeList[] = [];
  url = Setting.url + "uploads/app_image/";

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {

    // this._date = Date.now();
    this.title.title = "Employee List";
  }

  ngOnInit(): void {
    this.client.get('employee/list')
      .subscribe((res: EmployeeList[]) => {
        console.log(res, 'employee list');
        this.employees = res;
      })
  }

}
