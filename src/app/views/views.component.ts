import { Component } from "@angular/core";

@Component({
    selector: 'app-views',
    templateUrl: './views.component.html',
    styleUrls: ['views.component.css']
})
export class ViewsComponent {

    isUser: boolean = false;
    isAdmin: boolean = false;
    isSeller: boolean = false;

    constructor() {
        const rol = localStorage.getItem('token')

        if (rol === "usuario") {
            this.isUser = true;
        }
        if (rol === "vendedor") {
            this.isSeller = true;
        }
        if (rol === "administrador") {
            this.isAdmin = true;
        }
    }
}