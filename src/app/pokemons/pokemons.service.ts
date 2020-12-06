import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';



@Injectable({
    providedIn: 'root',
})

export class PokemonsService {




    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    getPokemon(id: number) {
        let pokemons = this.getPokemons();

        for (let index = 0; index < pokemons.length; index++) {
            if (id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    getPokemonTypes(): Array<string> {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }




}