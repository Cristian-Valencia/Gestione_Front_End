import { Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { InserisciPostComponent } from './components/inserisci-post/inserisci-post.component';
import { DettaglioPostComponent } from './components/dettaglio-post/dettaglio-post.component';
import { ModificaPostComponent } from './components/modifica-post/modifica-post.component';
import { ListaCategorieComponent } from './components/lista-categorie/lista-categorie.component';
import { DettaglioCategoriaComponent } from './components/dettaglio-categoria/dettaglio-categoria.component';
import { ModificaCategoriaComponent } from './components/modifica-categoria/modifica-categoria.component';

export const routes: Routes = [

    {

        path:"",
        component: ListaPostsComponent,
        pathMatch: "full"

    },
    {
        path: "post/lista",
        component: ListaPostsComponent
    },
    {
        path: "post/inserisci",
        component: InserisciPostComponent
    },
    {

        path: "post/dettaglio/:codice",
        component: DettaglioPostComponent
    },

    {

        path: "post/modifica/:codice",
        component: ModificaPostComponent
    },

    {

        path: "categoria/lista",
        component: ListaCategorieComponent
    },

    {

        path: "categoria/dettaglio/:codice",
        component: DettaglioCategoriaComponent
    },

        {

        path: "categoria/modifica/:codice",
        component: ModificaCategoriaComponent
    },



];
