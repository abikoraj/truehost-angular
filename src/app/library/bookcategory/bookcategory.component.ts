import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { ApiService } from 'src/app/services/api.service';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-bookcategory',
  templateUrl: './bookcategory.component.html',
  styleUrls: ['./bookcategory.component.scss']
})
export class BookcategoryComponent implements OnInit {

  constructor(private connection: ElectronService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {
    this.title.title = "Book Category";
  }

  ngOnInit(): void {
  }

}
