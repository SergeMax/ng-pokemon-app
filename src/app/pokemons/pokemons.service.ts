import { Injectable } from '@angular/core';
//import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable({
    providedIn: 'root',
})

export class PokemonsService {

    private pokemonsUrl = 'api/pokemons';

    constructor(private http: HttpClient) {
    }


    // avant avec mock-pokemon.ts
    //   getPokemons(): Pokemon[] {
    //     return POKEMONS;
    // }


    //après avec requete http

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_=> this.log(`fetched pokemons`)),
            catchError(this.handleError('getPokemons', []))
        );
    }

  // avant avec mock-pokemon.ts
    // getPokemon(id: number) {
    //     let pokemons = this.getPokemons();

    //     for (let index = 0; index < pokemons.length; index++) {
    //         if (id === pokemons[index].id) {
    //             return pokemons[index];
    //         }
    //     }
    // }

      getPokemon(id: number): Observable<Pokemon>  {
         const url = `${this.pokemonsUrl}/${id}`;

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id= ${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id = ${id}`))
        );
        }
    

    getPokemonTypes(): Array<string> {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }


    // Améliorer la gestion des erreurs dans une vraie application !!!!!!!!!!!!!!!!!!!!!!!!!!!!
    private handleError<T>(operation='operation', result?: T){
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }

    //méthode pour centraliser les log si besoin par la suite pour la gestion des erreurs : 

    private log(log: string){
        console.log(log);
    };
    

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOption = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
    return this.http.put(this.pokemonsUrl, pokemon, httpOption).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`;
        const httpOption = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        }
        
    return this.http.delete<Pokemon>(url, httpOption).pipe(
        tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
        catchError(this.handleError<any>('deletedPokemon'))
    )
    }


}