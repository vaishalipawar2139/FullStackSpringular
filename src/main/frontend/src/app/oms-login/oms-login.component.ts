import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../oms-service/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-oms-login',
    templateUrl: './oms-login.component.html',
    styleUrls: ['./oms-login.component.css']
})
export class OmsLoginComponent implements OnInit {

    username = ''
    password = ''
    invalidLogin = false

    constructor(private router: Router,
        private loginservice: AuthenticationService) { }

    ngOnInit() {
    }

    checkLogin() {
        (this.loginservice.authenticate(this.username, this.password).subscribe(
            data => {
                this.router.navigate([''])
                this.invalidLogin = false
            },
            error => {
                this.invalidLogin = true

            }
        )
        );
    }

}
