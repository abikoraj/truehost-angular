import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { TitleService } from 'src/app/services/title.service';
import { StockHistory } from '../stockhistory.model';

@Component({
  selector: 'app-stockhistory',
  templateUrl: './stockhistory.component.html',
  styleUrls: ['./stockhistory.component.scss']
})
export class StockhistoryComponent implements OnInit {

  stockhistroies: StockHistory[] = [];

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {
    this.title.title = "Stock History";
  }

  ngOnInit(): void {
    this.client.get('inventory/stockhistory')
      .subscribe((res: StockHistory[]) => {
        console.log(res, 'stock history');
        this.stockhistroies = res;
      })
  }

}
