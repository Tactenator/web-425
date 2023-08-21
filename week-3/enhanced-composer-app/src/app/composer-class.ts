import { IComposer } from "./composer-interface";

export class Composer {
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
