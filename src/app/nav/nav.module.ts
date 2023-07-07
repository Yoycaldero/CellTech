import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComponentNavbarComponent } from "./components/component-navbar.component";
import { AdminComponent } from './components/admin/admin.component';
import { SellerComponent } from './components/seller/seller.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        ComponentNavbarComponent
    ],
    declarations: [
        ComponentNavbarComponent,
        AdminComponent,
        SellerComponent,
        UserComponent
    ],
    providers: [],
})
export class NavModule { }
