import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})


export class GradeSummaryComponent {
  @Input() grade: string;
  @Input() course: string; 
}
