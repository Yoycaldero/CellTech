import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RolGuard } from "src/app/shared/roles.guard";
import { ProductDetailsComponent } from "./product-details/product-details.component";

const routes: Routes = [
    {
        path: 'administrador',
        component: ProductDetailsComponent,
        data: { rol: 'administrador' },
        canActivate: [RolGuard],
        canLoad: [RolGuard],
    },
    {
        path: 'usuario',
        component: HomeComponent,
        data: { rol: 'usuario' },
        canActivate: [RolGuard],
        canLoad: [RolGuard]
    },
    {
        path: 'vendedor',
        component: HomeComponent,
        data: { rol: 'vendedor' },
        canActivate: [RolGuard],
        canLoad: [RolGuard]
    },
    { path: '', redirectTo: 'usuario', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class tiendaRoutingModule { }