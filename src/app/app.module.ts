import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EditEntryComponent } from "./edit-entry/edit-entry.component";
import { ExpenseEntryListComponent } from "./expense-entry-list/expense-entry-list.component";
import { ExpenseEntryComponent } from "./expense-entry/expense-entry.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { MyInterceptor } from "./services/auth-interceptor.service";
import { ExpensentryService } from "./services/expensentry.service";



@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    AboutComponent,
    LoginComponent,
    HeaderComponent,
    LogoutComponent,
    EditEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ExpensentryService,
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
