/**
 * Name: Trevor McLaurine
 * Date: 8/22/2023
 * Assignment: Exercise 4.2 - Inversion of Control and Dependency Injection
 * Description: Composer Details Component
**/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer-interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent {
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {}

  ngOnInit() {
    const composerId: string|null = this.route.snapshot.paramMap.get('composerId')

    if(composerId){
      this.composer = this.composerService.getComposer(parseInt(composerId))!
    }
  }
}
