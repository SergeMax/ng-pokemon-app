import { Component, OnInit} from '@angular/core';
import {POKEMONS} from './mock-pokemons';
import {Pokemon} from './pokemon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  name = 'Maxime';
  pokemons: Pokemon[] = null;

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon){
    console.log('Vous avez séléctionné ' + pokemon.name);
  }
}
