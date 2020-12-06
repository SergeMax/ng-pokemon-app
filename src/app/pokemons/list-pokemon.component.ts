import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: []
})
export class ListPokemonComponent implements OnInit {
  name = 'Maxime';
  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) { }


  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemons = this.pokemonsService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon): void {

    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}

// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button 