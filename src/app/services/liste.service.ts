import { Injectable } from '@angular/core';
import { ListeApp } from '../models/liste.model';



@Injectable({
  providedIn: 'root'
})
export class ListeService {


  constructor() {

  }
  listeApp :  ListeApp[]  = [
    {
      id : 1,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 2,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 3,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 4,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 5,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 6,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
    {
      id : 7,
      prenom : 'libasse' ,
      nom : 'libasse' ,
      adress :'libasse' ,
    },
  ]


  getAllListe() : ListeApp[] {
    return this.listeApp
  }
  getlisteById(bookId:number) {
     return this.listeApp.find(listeApp =>listeApp.id === bookId)
  }

}
