import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})

export class TableauComponent {
    start: Date =  new Date();
    cx: number = 36;
    cy = 50;
    w = 60;
    h = 60;
}
