import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewsComponent } from "./views/views.component";
import { AuthGuard } from "./shared/auth.guard";

const routes: Routes = [
    {
        path: 'tienda',
        component: ViewsComponent,
        loadChildren: () => import('./views/tienda/tienda.module').then(m => m.TiendaModule),
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard]
    },
    { path: 'autenticacion', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: '**', redirectTo: 'autenticacion/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
