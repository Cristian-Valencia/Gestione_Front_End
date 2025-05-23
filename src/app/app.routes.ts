import { Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { InserisciPostComponent } from './components/inserisci-post/inserisci-post.component';
import { DettaglioPostComponent } from './components/dettaglio-post/dettaglio-post.component';

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


];
