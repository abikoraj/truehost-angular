import { IconModule } from './../icon/icon.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { Router, RouterModule } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { MenuitemComponent } from './dashboard/sidebar/menuitem/menuitem.component';
import { SpinnerComponent } from './partials/spinner/spinner.component';
import { NotifierComponent } from './partials/notifier/notifier.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    MenuitemComponent,
    SpinnerComponent,
    NotifierComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports:[SpinnerComponent]
})
export class LayoutModule { }
