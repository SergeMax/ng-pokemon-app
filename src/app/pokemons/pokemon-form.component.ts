import { Component, Input, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';



@Component({
    selector: 'pokemon-form',
    templateUrl: './pokemon-form.component.html'
})

export class PokemonFormComponent implements OnInit{

    @Input() pokemon: Pokemon;
    types: Array<string>;

    constructor(
        private pokemonsService: PokemonsService,
        private router: Router) {}
    


    ngOnInit() {
        this.types = this.pokemonsService.getPokemonTypes();
    }

    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);

        if (index > -1) return true;
        return false;
    }

    selecType($event: any, type: string): void {
        let checked = $event.target.checked;
        if(checked) {
            this.pokemon.types.push(type);
        }else {
            let index = this.pokemon.types.indexOf(type);
            if (index > 1) {
                this.pokemon.types.splice(index, 1);
            }
        }
    }

    onSubmit(): void{
        console.log("Submit form !");
        let link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
    }

    


}