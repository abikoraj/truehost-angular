import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ParentlistComponent } from './parent/parentlist/parentlist.component';
import { AuthserviceService } from './services/auth/authservice.service';
import { StudentModule } from './student/student.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "student",
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "parent",
        loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "employee",
        loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "fee",
        loadChildren: () => import('./fee/fee.module').then(m => m.FeeModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "inventory",
        loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "accounting",
        loadChildren: () => import('./office/office.module').then(m => m.OfficeModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: "library",
        loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
      }
    ],
    canActivate: [AuthserviceService]
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'logout',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
