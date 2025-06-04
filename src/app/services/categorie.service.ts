import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }

  async RecuperaListaCategorie() : Promise<any[]> {


    try{

      let risultato = await (await fetch("http://localhost:8080/api/categories")).json()

      if(Array.isArray(risultato)){

        return risultato;
        
      }


    } catch(error){

      console.log(`Errore di Recupero di lista delle categori: ${error}`);

    }

    console.log("Connessione Fallita")

    return[];

  }


  async Eliminazione ( codice : number ) : Promise<boolean>{

    try{


      let risposta = await fetch(`http://localhost:8080/api/categories/${codice}`, {method: "DELETE"})

      if(!risposta.ok){

        console.log(`Errore HTTP: ${risposta.status}`)

        return false;

      } else{

        console.log("Eliminazione riuscita")

        return true;

      }


    } catch(error){

      console.log(`Errore Eliminazione: ${error}`)

    }

    return false;

  }

  async DettaglioCategoria(varId :number){

    try {

      let risposta = await fetch(`http://localhost:8080/api/categories/${varId}`)

      return risposta;

    } catch (error){

      console.log(`Errore nel DettaglioCategoria: ${error}`)

    }

    return null

  }

  async InserimentoCategoria ( cat : any ) : Promise<boolean> {


    try{


      let risultato = await (await fetch("http://localhost:8080/api/categories",

        {
          headers:{
            "Content-type": "application/json"
          },
          method: "POST", 
          body:JSON.stringify(cat)
        }

      )).json();


      console.log(risultato);

      if(risultato)
        return true

      return false

    } catch(error){

      console.log(`Inserimento Fallito: ${error}`)

    }

    return false;

  }

  async ModificaCategoria (cat:any) : Promise<boolean>{

    try{
      
      let varId = cat.id;

      const response = await ( await fetch(`http://localhost:8080/api/categories/${varId}`,
        {

          headers:{
            "Content-Type": "application/json"
          },
          method: "PUT",
          body: JSON.stringify(cat) 

        }
      )).json();

      if(!response){

        console.log(`Errore HTTP: ${response}`)

        return false;

      } else {

        return true;

      }

    } catch(error){

      console.log(`Modifica Fallito: ${error}`)
      
    }

    return false;

  }


}
