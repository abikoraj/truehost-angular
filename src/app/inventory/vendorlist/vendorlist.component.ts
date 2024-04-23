import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { TitleService } from 'src/app/services/title.service';
import { VendorList } from '../vendorlist.model';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.scss']
})
export class VendorlistComponent implements OnInit {

  vendors: VendorList[] = [];

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {
    this.title.title = "Vendor List";
  }

  ngOnInit(): void {
    this.client.get('inventory/vendors')
      .subscribe((res: VendorList[]) => {
        console.log(res, 'employee list');
        this.vendors = res;
      })
  }

}
