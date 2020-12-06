import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { PokemonsService } from './pokemons.service';

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})

export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        this.getPokemon();
    }

    getPokemon() {
        let id = + this.route.snapshot.paramMap.get("id");
        this.pokemon = this.pokemonsService.getPokemon(id);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }
}

// https://stackoverflow.com/questions/50284714/using-routerlink-and-click-in-same-button