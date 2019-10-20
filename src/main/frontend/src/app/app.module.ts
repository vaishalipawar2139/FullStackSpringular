import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmsHeaderComponent } from './oms-header/oms-header.component';
import { OmsFooterComponent } from './oms-footer/oms-footer.component';
import { OmsAddComponent } from './oms-add/oms-add.component';
import { OmsLoginComponent } from './oms-login/oms-login.component';
import { OmsListComponent } from './oms-list/oms-list.component';
import { OmsLogoutComponent } from './oms-logout/oms-logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        OmsHeaderComponent,
        OmsFooterComponent,
        OmsAddComponent,
        OmsLoginComponent,
        OmsListComponent,
        OmsLogoutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
