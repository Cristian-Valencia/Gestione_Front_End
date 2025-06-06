import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-dettaglio-categoria',
  imports: [CommonModule],
  templateUrl: './dettaglio-categoria.component.html',
  styleUrl: './dettaglio-categoria.component.css'
})
export class DettaglioCategoriaComponent implements OnInit {

  catDettaglio : any = {};

  constructor(

    private rottaAttiva: ActivatedRoute,
    private service : CategorieService,
    private router : Router

  ){};

  ngOnInit(): void {
    
    this.rottaAttiva.params.subscribe(
      (risultato =>{

        const codice = risultato['codice'];

        if(codice && codice.trim() !== ""){

          this.service.DettaglioCategoria(codice)
            .then(ris =>{

              this.catDettaglio = ris


            })

        }

      })
    )

  }

  Modifica(varId : string | undefined ) : void {

    if(varId){

      this.router.navigateByUrl(`/categoria/modifica/${varId}`)
      
    } else {

      alert("Errore 404")

    }

  }

}
