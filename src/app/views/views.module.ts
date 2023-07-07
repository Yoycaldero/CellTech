import { RouterModule } from "@angular/router";
import { NavModule } from "../nav/nav.module";

import { LoginModule } from "../login/login.module";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../app.component";


@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      NavModule,
      RouterModule,
      ViewsModule,
      LoginModule,
      HttpClientModule,
      BrowserModule,
      AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  