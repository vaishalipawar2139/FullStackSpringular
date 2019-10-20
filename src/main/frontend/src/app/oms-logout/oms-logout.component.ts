import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../oms-service/authentication.service';

@Component({
    selector: 'app-oms-logout',
    templateUrl: './oms-logout.component.html',
    styleUrls: ['./oms-logout.component.css']
})
export class OmsLogoutComponent implements OnInit {

    constructor(private authentocationService: AuthenticationService,
        private router: Router) { }

    ngOnInit() {
        this.authentocationService.logOut();
        this.router.navigate(['login']);
    }

}
