import { Component, OnInit } from '@angular/core';
import { HttpClientService, Orders } from '../oms-service/http-client.service';

@Component({
    selector: 'app-oms-list',
    templateUrl: './oms-list.component.html',
    styleUrls: ['./oms-list.component.css']
})
export class OmsListComponent implements OnInit {

    orders: Orders[];

    constructor(private httpClientService: HttpClientService) { }

    ngOnInit() {
        this.httpClientService.getOrders().subscribe(
            data => this.handleSuccessfulResponse(data),
        );
    }

    handleSuccessfulResponse(data) {
        this.orders = data;
    }

    deleteOrder(order: Orders): void {
        this.httpClientService.deleteOrder(order)
            .subscribe(data => {
                this.orders = this.orders.filter(u => u !== order);
            })
    };

}
