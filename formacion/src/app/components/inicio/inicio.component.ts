import { MatDialog } from '@angular/material/dialog';
import { Usuario } from './../../models/table.models';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
  
  
export class InicioComponent implements OnInit{

  public bandera: boolean = false;
  public form: FormGroup;
  private idUsuario: number = -1;
  private subscription: Subscription;
  private auxName: string; 
  private auxSexo: string;

  messages: any[] = [];

  constructor(private service: ConsultasService, public dialog : MatDialog) {
    // subscribe to home component messages
    this.subscription = this.service.getId().subscribe(numero => {
      console.log(numero);
    });

  }

  ngOnInit(): void {

    this.form = new FormGroup(
      {
        id: new FormControl('', Validators.required),
        nombre: new FormControl('', Validators.required),
        apellido: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required)
      }
    );

    // this.subscription = this.service.getId().subscribe(numero => {
    //   this.idUsuario = numero;
    //   console.log("estoy adentro" + this.idUsuario)
    //   if (this.idUsuario != -1) {
    //     this.bandera = true;
    //   }
    // });
  }

  agregarUsuario(){
    
    this.openDialog();
    this.auxName = this.form.value.nombre + " " + this.form.value.apellido;

    if (this.form.value.sexo === "option1") {
      this.auxSexo = "Male";
    }
    
    if (this.form.value.sexo === "option2") {
      this.auxSexo = "Female";
    }

    const newUser: Usuario = {
      
      id: this.form.value.id,
      name: this.auxName,
      gender: this.auxSexo,

    }

    console.log(newUser);

  }
  
//   ngOnDestroy() {
//     // unsubscribe to ensure no memory leaks
//     this.subscription.unsubscribe();
//   }
  
  openDialog(): void {

    this.dialog.open(CuadroDialogoComponent);
  }

  
}

