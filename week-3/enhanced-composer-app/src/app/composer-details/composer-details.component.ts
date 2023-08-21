import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer-interface';
import { Composer } from '../composer-class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent {
  composer: IComposer;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const composerId: string|null = this.route.snapshot.paramMap.get('composerId')

    if(composerId){
      this.composer = new Composer().getComposer(parseInt(composerId))!
    }
  }
}
