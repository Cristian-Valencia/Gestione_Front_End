import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Risposta } from '../models/risposta';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  async RecuperaListaPost() : Promise<any[]> {


    let risultato = await (await fetch("http://localhost:8080/api/posts")).json()


    if(Array.isArray(risultato)){

      return risultato;

    }
 
    console.log("connessione fallita")
    return [];


  }


  async Eliminazione(codice : number): Promise<boolean>{

    try{

      let risposta = await fetch(`http://localhost:8080/api/posts/${codice}`, {method: "DELETE"});

      if(!risposta.ok){
        console.log("Errore HTTP: ", risposta.status)
        return false;
      } else{
        
        console.log("sono arrivato a fare l'eliminazione nel service")
        return true;
      }


    } catch(error){

      console.log("Errore di eliminazione nel service: ", error)

    }
    


      return false;

  }

  async Dettaglio(varCodice : number){

    try{

      let risposta = (await fetch(`http://localhost:8080/api/posts/${varCodice}`)).json()
        


      
      return risposta;

    }catch(error){

      console.log("Errore nel dettaglio: ", error);

    }

    return null;

  }


}
