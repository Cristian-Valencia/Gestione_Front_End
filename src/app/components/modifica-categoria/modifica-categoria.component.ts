import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategorieService } from '../../services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-categoria',
  imports: [FormsModule],
  templateUrl: './modifica-categoria.component.html',
  styleUrl: './modifica-categoria.component.css'
})
export class ModificaCategoriaComponent implements OnInit {

  constructor(

    private service : CategorieService,
    private rottaAttiva : ActivatedRoute,
    private router : Router

  ) {}

    id?: number;
    catId ?: string;
    nameCategory ?: string;


  ngOnInit(){

    this.rottaAttiva.params.subscribe( async (risultato) =>{

      const codice = risultato['codice'];

      if(codice && codice.trim() !== ""){

        let cat : any = await this.service.DettaglioCategoria(codice);

        if(cat){
          this.id = cat.id,
          this.nameCategory = cat.nameCategory
        }

      }


    })
    
  }


  Modifica(): void{

    let idRandom = Math.floor (Math.random() * (9999 - 1000 + 1 ) ) + 1000;

    let cat = {

      id:this.id,
      categoryId: `CAT${idRandom}`,
      nameCategory : this.nameCategory

    }

    this.service.ModificaCategoria(cat).then(ris=>{

      if(ris){
        alert("Modifica effettuata con successo");
        this.router.navigateByUrl(`/categoria/dettaglio/${this.id}`)
      }

    })

  }



}
