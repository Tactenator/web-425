/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: Exercise 4.2 - Inversion of Control and Dependency Injection
 * Description: Composer List Component
**/

import { Component } from '@angular/core';
import { IComposer } from '../composer-interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {

  composers: Array<IComposer>

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers()
  }
}
