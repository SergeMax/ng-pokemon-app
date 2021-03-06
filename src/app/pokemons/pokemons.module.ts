import { from } from 'rxjs';
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './directive/border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './form-pokemon/pokemon-form.component';
import {AddPokemonComponent} from './add-pokemon/add-pokemon.component';
import { PokemonSearchComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from '../loader.component';
import { AuthGuard } from '../auth-guard.service';
import { PokemonsService } from './service-pokemon/pokemons.service';
import { AuthService } from '../auth.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        PokemonFormComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonSearchComponent,
        LoaderComponent
    ],
    providers:[
        PokemonsService,
        AuthGuard,
        AuthService

    ]
})

export class PokemonsModule{}
