import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { BasicService } from 'src/app/services/basic.service';
import { TitleService } from 'src/app/services/title.service';
import { ParentList } from '../parentlist.model';

@Component({
  selector: 'app-parentlist',
  templateUrl: './parentlist.component.html',
  styleUrls: ['./parentlist.component.scss']
})
export class ParentlistComponent implements OnInit {

  parents: ParentList[] = [];

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {

    // this._date = Date.now();
    this.title.title = "Parent List";
  }

  ngOnInit(): void {
    this.client.get('parents/list')
      .subscribe((res: ParentList[]) => {
        console.log(res, 'parent list');
        this.parents = res;
      })
  }

}
