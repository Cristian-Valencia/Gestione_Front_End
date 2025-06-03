import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-inserisci-post',
  imports: [FormsModule],
  templateUrl: './inserisci-post.component.html',
  styleUrl: './inserisci-post.component.css'
})
export class InserisciPostComponent {

  title?:string;
  content?:string;
  author?: string;
  createdAt?:string;



  constructor(private service:PostService){};

  Inserisci() :void {

    let idRandom = Math.floor (Math.random() * (9999 - 1000 + 1)) + 1000;

    let post ={
      postId: `POST${idRandom}`,
      title: this.title,
      content: this.content,
      author: this.author,
      createdAt: this.createdAt

    }


    this.service.Inserimento(post).then(ris=>{

      if(ris){

        alert("Inserimento effettuato con successo")

      } else{

        alert("Errore di Inseriment")

      }

    })



  }
  

}
