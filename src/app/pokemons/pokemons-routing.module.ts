import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';





const pokemonsRoutes: Routes = [
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemon/edit/:id', component: EditPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PokemonRoutingModule { }