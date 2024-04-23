import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Cls } from 'src/app/Model/cls';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { BasicService } from 'src/app/services/basic.service';
import { TitleService } from 'src/app/services/title.service';
import { DueList } from '../duelist.model';
import { InvoiceList } from '../invoicelist.model';

@Component({
  selector: 'app-duelist',
  templateUrl: './duelist.component.html',
  styleUrls: ['./duelist.component.scss']
})
export class DuelistComponent implements OnInit {

  _class: number;
  _section: any = 'all';
  sections: Cls[] = [];
  datas: any[] = [];
  state = 0;
  dues: DueList[] = [];

  constructor(private connection: ElectronService, public basic: BasicService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {

    if (this.basic.loaded) {
      this._class = this.basic.classes[0].id;
      this.change();
    } else {
      this.basic.onLoaded.subscribe((res) => {
        this._class = this.basic.classes[0].id;
        this.change();
      });
    }

    this.title.title = "Due Fees Invoice";
  }

  ngOnInit(): void {
  }

  change() {

    this.basic.classes.forEach(cls => {
      if (cls.id == this._class) {
        this.sections = cls.sections;

      }
    });
    this._section = 'all';
    console.log(this._class, this.sections);
  }

  load() {
    this.state = 1;
    this.client.post('fees/dueInvoice', {
      class_id: this._class,
      section_id: this._section,
      branch_id: this.auth.user.branch_id
    })
      .subscribe((res: InvoiceList[]) => {
        console.log(res, "dues list");
        this.dues = res;
        this.state = 2;
      }, (err) => {
        this.state = 0;
      })
  }

}
