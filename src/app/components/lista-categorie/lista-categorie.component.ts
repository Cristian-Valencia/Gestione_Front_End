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


}
