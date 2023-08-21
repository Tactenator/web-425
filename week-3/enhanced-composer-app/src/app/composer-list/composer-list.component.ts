import { Component } from '@angular/core';
import { IComposer } from '../composer-interface';
import { Composer } from '../composer-class';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {

  composers: Array<IComposer>

  constructor() {
    this.composers = new Composer().getComposers()
  }
}
