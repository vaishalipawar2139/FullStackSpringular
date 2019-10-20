import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../oms-service/authentication.service';

@Component({
  selector: 'app-oms-header',
  templateUrl: './oms-header.component.html',
  styleUrls: ['./oms-header.component.css']
})
export class OmsHeaderComponent implements OnInit {

  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
  }

}
