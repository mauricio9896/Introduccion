import { CuadroDialogoComponent } from './../cuadro-dialogo/cuadro-dialogo.component';
import { Usuario } from './../../models/table.models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConsultasService } from 'src/app/services/consultas.service';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'gender','acciones'];
  dataSource = new MatTableDataSource<Usuario>([]);

  public mensaje = " hola mundo ";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private service: ConsultasService, public dialog : MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

    this.service.getDatos().subscribe(reponse => {
    this.dataSource.data = reponse.results;
    }
    );
  }

  applyFilter(event: Event): void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminar(id: number): void{ 
    this.openDialog();
    console.log( "Eliminar el usuario : " + id);
  }

  openDialog(): void {

    this.dialog.open(CuadroDialogoComponent);
  }

  editar(numero: number): void {
    this.service.postId(numero);
  }
}
