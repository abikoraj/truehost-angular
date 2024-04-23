import { IconModule } from './icon/icon.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StudentModule } from './student/student.module';
import { NgxElectronModule } from 'ngx-electron';
import { HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { ParentlistComponent } from './parent/parentlist/parentlist.component';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { InvoicelistComponent } from './fee/invoicelist/invoicelist.component';
import { VendorlistComponent } from './inventory/vendorlist/vendorlist.component';
import { AccountlistComponent } from './office/accountlist/accountlist.component';
import { BooklistComponent } from './library/booklist/booklist.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentlistComponent,
    EmployeelistComponent,
    InvoicelistComponent,
    VendorlistComponent,
    AccountlistComponent,
    BooklistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    LayoutModule,
    IconModule,
    NgxElectronModule,
    HttpClientModule,
    NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
