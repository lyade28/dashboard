import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListeService } from './services/liste.service';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
const appRoutes : Routes =[
{path : 'liste' , component : ListeComponent},
{path: '' , component : ListeComponent , pathMatch : "full"},
{path : 'liste/:id' , component : DetailComponent},
{path : 'add' , component : AddComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ListeComponent,
    DetailComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,

  ],
  providers: [
    ListeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
