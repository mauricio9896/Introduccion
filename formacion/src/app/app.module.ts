import { ConsultasService } from 'src/app/services/consultas.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { NavComponent } from './components/nav/nav.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { LoginComponent } from './components/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CuadroDialogoComponent } from './components/cuadro-dialogo/cuadro-dialogo.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    SiderbarComponent,
    ConsultaComponent,
    NavComponent,
    InicioComponent,
    LoginComponent,
    CuadroDialogoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatDialogModule
  ],
  providers: [ConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
