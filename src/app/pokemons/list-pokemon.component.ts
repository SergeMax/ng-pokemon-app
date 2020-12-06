import { Component, OnInit} from '@angular/core';
import {POKEMONS} from './mock-pokemons';
import {Pokemon} from './pokemon';
import {Router} from '@angular/router';


@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: []
})
export class ListPokemonComponent implements OnInit {
  name = 'Maxime';
  pokemons: Pokemon[] = null;

  constructor(private router: Router){

  }

  ngOnInit(){
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {

    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button 