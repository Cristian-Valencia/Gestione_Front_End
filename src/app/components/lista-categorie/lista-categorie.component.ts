import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-lista-categorie',
  imports: [CommonModule],
  templateUrl: './lista-categorie.component.html',
  styleUrl: './lista-categorie.component.css'
})
export class ListaCategorieComponent implements OnInit {

  elenco : any[] = new Array();

  constructor(private service : CategorieService){};

  async ngOnInit() {
    
    try{

      let lista = await this.service.RecuperaListaCategorie();
      this.elenco = lista;

    } catch(error){

      console.log(`Errore nel caricamente della lista: ${error}`)

    }

  }

  Elimina ( id : number | undefined ) {

    console.log("bottone Elimina funzionante");

    if(id){

      this.service.Eliminazione(id)
        .then(ris =>{

          if(ris){

            alert("Eliminazione effettuata con successo")

            this.service.RecuperaListaCategorie().then(ris=>{

              this.elenco = ris;

            })

          } else {

            alert("Errore di Eliminazione")

          }

        })


    }else{

      alert("Errore, codice di Eliminazione non presente")

    }


  }


}
