import { Component, OnInit } from '@angular/core';
import { Orders, HttpClientService } from '../oms-service/http-client.service';

@Component({
    selector: 'app-oms-add',
    templateUrl: './oms-add.component.html',
    styleUrls: ['./oms-add.component.css']
})
export class OmsAddComponent implements OnInit {

    order: Orders = new Orders(0, "", "", "", "", "", "", 0, 0);

    constructor(private httpClientService: HttpClientService) { }

    ngOnInit() {
    }

    createOrder(): void {
        this.httpClientService.createOrder(this.order)
            .subscribe(data => {
                alert("Order created successfully.");
            });

    };


}
