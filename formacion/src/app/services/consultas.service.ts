import { InfoApi} from './../models/table.models';
import { Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  
export class ConsultasService{

  // private get_url = 'http://localhost:8080/getDatos';
  private get_url = "https://rickandmortyapi.com/api/character";
  private idUsuario = new Subject<number>();

  constructor(private http: HttpClient) { }

  public getDatos(): Observable<InfoApi>{
    return this.http.get<InfoApi>(this.get_url);
  }

  public getId(): Observable<number>{
    return this.idUsuario.asObservable();
  }

  public postId(id: number): void {
    this.idUsuario.next(id);
  }

}
