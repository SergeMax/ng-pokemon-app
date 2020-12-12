import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../auth-guard.service';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';





const pokemonsRoutes: Routes = [
	{
		path: 'pokemon',
		canActivate: [AuthGuard],
		children: [
			{ path: 'list', component: ListPokemonComponent },
			{ path: 'add', component: AddPokemonComponent },
			{ path: 'edit/:id', component: EditPokemonComponent },
			{ path: ':id', component: DetailPokemonComponent }
		]
	}
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