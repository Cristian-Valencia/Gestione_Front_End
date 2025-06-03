import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modifica-post',
  imports: [FormsModule],
  templateUrl: './modifica-post.component.html',
  styleUrl: './modifica-post.component.css'
})
export class ModificaPostComponent implements OnInit{

  constructor(
    private service: PostService,
    private rottaAttiva: ActivatedRoute,
    private router: Router 

  ) {}

  id?: number;
  title?:string;
  content?:string;
  author?: string;
  createdAt?:string;


  ngOnInit(){

    this.rottaAttiva.params.subscribe(async (risultato)=>{

      const codice = risultato['codice'];

      if(codice && codice.trim() !== ""){

        let pos = await this.service.Dettaglio(codice);

        /*let idRandom = Math.floor (Math.random() * (9999 - 1000 + 1)) + 1000*/

        if(pos){
          this.id = pos.id,
          this.title = pos.title,
          this.content = pos.content,
          this.author = pos.author,
          this.createdAt = pos.createdAt

        }


      }

    })

  }

  Modifica(): void{

    let idRandom = Math.floor (Math.random() * (9999 - 1000 + 1)) + 1000;

    let pos = {
      id: this.id,
      postId: `POST${idRandom}`,
      title: this.title,
      content: this.content,
      author: this.author,
      createdAt: this.createdAt,
      categories: []

    }

    this.service.Modifica(pos).then(ris=>{
      if(ris){
        alert("Modifica effettuato con successo");
        this.router.navigateByUrl(`/post/dettaglio/${this.id}`)
      }
    })

  }


}
