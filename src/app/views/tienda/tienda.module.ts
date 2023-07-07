import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { tiendaRoutingModule } from "./tienda-routing.module";
import { RouterModule } from "@angular/router";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        tiendaRoutingModule,
        FormsModule
    ],
    exports: [
        ProductDetailsComponent
    ],
    declarations: [
        ProductDetailsComponent
    ],
    providers: [],
})

export class TiendaModule { }

