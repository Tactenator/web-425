/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: Exercise 4.2 - Inversion of Control and Dependency Injection
 * Description: Services provider for Composers.
**/

import { Injectable } from '@angular/core';
import { IComposer } from './composer-interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {
  composers: Array<IComposer>

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Pyotr Tchaikovsky", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Nobuo Umetasu", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Michael Salvatori", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Martin O' Donnell", genre: "Classical"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for(let composer of this.composers) {
      if(composer.composerId === composerId){
        return composer;
      }
    }
    return;
  }
}
