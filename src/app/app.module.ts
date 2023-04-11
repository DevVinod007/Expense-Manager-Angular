import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';



@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    AboutComponent,
    ItemComponent,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
    EditEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
