import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmsListComponent } from './oms-list/oms-list.component';
import { AuthGaurdService } from './oms-service/auth-guard.service';
import { OmsAddComponent } from './oms-add/oms-add.component';
import { OmsLoginComponent } from './oms-login/oms-login.component';
import { OmsLogoutComponent } from './oms-logout/oms-logout.component';


const routes: Routes = [
    { path: '', component: OmsListComponent, canActivate: [AuthGaurdService] },
    { path: 'addOrder', component: OmsAddComponent, canActivate: [AuthGaurdService] },
    { path: 'login', component: OmsLoginComponent },
    { path: 'logout', component: OmsLogoutComponent, canActivate: [AuthGaurdService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
