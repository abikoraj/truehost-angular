import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { TitleService } from 'src/app/services/title.service';
import { AccountList } from '../accountlist.model';

@Component({
  selector: 'app-accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountlistComponent implements OnInit {

  accounts: AccountList[] = [];

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {
    this.title.title = "Account List";
  }

  ngOnInit(): void {
    this.client.get('office/accounts')
      .subscribe((res: AccountList[]) => {
        console.log(res, 'stock history');
        this.accounts = res;
      })
  }

}
