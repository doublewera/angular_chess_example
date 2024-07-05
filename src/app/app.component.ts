import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableauComponent,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chessclock';
  tableaux = [
    1, 2
  ];
}
