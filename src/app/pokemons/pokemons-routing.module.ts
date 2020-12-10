import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';





const pokemonsRoutes: Routes = [
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemon/edit/:id', component: EditPokemonComponent},
    {path: 'pokemon/add', component: AddPokemonComponent},
    {path: 'pokemon/:id', component: DetailPokemonComponent},
    
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