import { MenuItemModel } from './../menuitemmodal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {
  @Input() menus: MenuItemModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
