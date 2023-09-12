/**
 * Name: Trevor McLaurine
 * Date: 9/11/2023
 * Assignment: Assignment 6.4 - Input Properties
 * Description: Home component
**/

import { Component } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  gpaTotal: number = 0;
  transcriptEntry: ITranscript
  selectableGrades: Array<string> = [
    'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'
  ]
  transcriptEntries: Array<ITranscript> = []

  constructor() {
    this.transcriptEntry = {} as ITranscript
  }

  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry)
    this.transcriptEntry = {} as ITranscript
  }

  calculateResults() {
    let gpa:number = 0;
    this.transcriptEntries.forEach(entry => {
      switch(entry.grade) {
        case ('A'):
          gpa+= 4.0;
          break;
        case ('A-'):
          gpa+= 3.7;
          break;
        case ('B+'):
          gpa+=3.3;
          break;
        case ('B'):
          gpa+=3.0
          break;
        case ('B-'):
          gpa+=2.7;
          break;
        case ('C+'):
          gpa+=2.3;
          break;
        case ('C'):
          gpa+=2.0;
          break;
        case ('C-'):
          gpa+=1.7;
          break;
        case ('D+'):
          gpa+=1.3;
          break;
        case('D'):
          gpa+=1.0
          break;
        case('D-'):
          gpa+=0.7;
          break;
        case('F'):
          gpa+=0
          break;
      }
    })
    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  clearEntries() {
    this.transcriptEntries = []
    this.gpaTotal = 0
  }
}
