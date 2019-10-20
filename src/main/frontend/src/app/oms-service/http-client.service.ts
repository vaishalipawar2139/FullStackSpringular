import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Orders {
    constructor(
        public id: number,
        public brand: string,
        public contactNo: string,
        public customerName: string,
        public email: string,
        public item: string,
        public orderType: string,
        public price: number,
        public qty: number,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class HttpClientService {

    constructor(
        private httpClient: HttpClient
    ) {
    }
    getOrders() {
        let username = 'vaispa'
        let password = 'password'

        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.get<Orders[]>('http://localhost:9090/api/v1/orders', { headers });
    }


    public deleteOrder(order) {
        let username = 'vaispa'
        let password = 'password'

        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.delete<Orders>("http://localhost:9090/api/v1/orders" + "/" + order.id, { headers });
    }

    public createOrder(order) {
        let username = 'vaispa'
        let password = 'password'

        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.httpClient.post<Orders>("http://localhost:9090/api/v1/orders", order, { headers });
    }

}
