import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../service-pokemon/pokemons.service';


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
// avant utilisation http
  // getPokemons() {
  //   this.pokemons = this.pokemonsService.getPokemons();
  // }

  getPokemons(): void {
    this.pokemonsService.getPokemons().subscribe(pokemons=> this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon): void {

    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

  addOnePokemon(){
    this.router.navigate(['pokemon/add']);
  }

}

// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button 