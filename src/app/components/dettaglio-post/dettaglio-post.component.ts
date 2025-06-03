import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dettaglio-post',
  imports: [CommonModule],
  templateUrl: './dettaglio-post.component.html',
  styleUrl: './dettaglio-post.component.css'
})
export class DettaglioPostComponent implements OnInit {

  postDettaglio : any = {};
  elencoCategorie : any[] = new Array();

  constructor( 
    private rottaAttiva: ActivatedRoute, 
    private service:PostService,
    private router: Router  
  ){}

  ngOnInit(): void {
    this.rottaAttiva.params.subscribe(
      (risultato) =>{
        
        const codice = risultato['codice'];

        if(codice && codice.trim() !== ""){

          this.service.Dettaglio(codice)
              .then(ris => {
                this.postDettaglio = ris
                this.elencoCategorie = ris.categories

                console.log(this.postDettaglio)
                console.log(this.elencoCategorie)
          })
              

          

        }
        

      }
    )
  }

  Modifica(varCodice : string | undefined) : void{
    if(varCodice){
      this.router.navigateByUrl(`/post/modifica/${varCodice}`)
    }
  }


}
