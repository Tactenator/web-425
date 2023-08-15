import { Component } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Wolfgang Mozart", "Classical"),
      new Composer("Pyotr Tchaikovsky", "Classical"),
      new Composer("Nobuo Umetasu", "Classical"),
      new Composer("Michael Salvatori", "Classical"),
      new Composer("Martin O' Donnell", "Classical")
    ]
  }
}
