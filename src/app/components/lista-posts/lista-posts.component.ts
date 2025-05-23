import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lista-posts',
  imports: [CommonModule],
  templateUrl: './lista-posts.component.html',
  styleUrl: './lista-posts.component.css'
})
export class ListaPostsComponent implements OnInit {

  elenco : any[] = new Array();

  constructor(private service: PostService){

  }
  async ngOnInit() {
    
    try{

      let lista = await this.service.RecuperaListaPost();
      this.elenco = lista;


    } catch(error){

      console.error("Errore nel caricamento: ", error);

    }

  }


  Elimina(codice:number | undefined): void {

  
    if(codice){

      this.service.Eliminazione(codice)
        .then(ris=>{

          

          if(ris){
            alert("Eliminazione effettuata con successo")

            this.service.RecuperaListaPost().then(ris=>{
              this.elenco = ris;
            })

          } else{
            alert("Errore di Eliminazione")
          }
        })

    }else{

      alert("Errore, codice non presente");

    }


    
  



  }


  


}
