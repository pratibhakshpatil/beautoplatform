import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './shared/auth/gaurds/auth.guard';
import { RoleGuard } from './shared/auth/gaurds/role.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },

  {
    path: 'pages',
    // component: PagesComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    // canActivate:[AuthGuard]
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/_core/core.module').then(
        (m) => m.CoreModule
      ),
  },
  {
    path: 'dashboard',

    loadChildren: () =>
      import('./modules/_myPortal/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [RoleGuard]
  },
  {
    path: 'employeeMgnmt',

    loadChildren: () =>
      import('./modules/_myPortal/employee-mngmt/employee-mngmt.module').then(
        (m) => m.EmployeeMngmtModule
      ),

  },
  {
    path: 'employeeMgnmt',
  
    loadChildren: () =>
      import('./modules/_myPortal/employee-mngmt/employee-mngmt.module').then(
        (m) => m.EmployeeMngmtModule
      ),
     
  },
  //  {
  //   path: 'beautoSystem',

  //   loadChildren: () =>
  //     import('./modules/_landing/pages/pages.module').then(
  //       (m) => m.PagesModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
