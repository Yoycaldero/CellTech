import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./autenticate/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LoginRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    providers: [],
})
export class LoginModule {  }