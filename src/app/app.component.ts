import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { Tbl } from './tableau/tbl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableauComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chessclock';
  mysecond: number = 0;
  tableaux: Array<Tbl> = [
    new Tbl(50, true, "Left"),
    new Tbl(50, false, "Right")
  ];
  ngOnInit() {
      setInterval(this.tickArrow, 1000);
  }
  clickMe(index: number) {
    this.tableaux[index].active = !this.tableaux[index].active;
    this.tableaux[(1 - index)].active = !this.tableaux[(1 - index)].active;
  }
  tickArrow() {
    if (this.mysecond !== undefined) {
        this.mysecond += 1;
        for (let i = 0; i < this.tableaux.length; i++) {
          this.tableaux[i].countdown();
          console.log(this.tableaux[i].name, 'time left', this.tableaux[i].timeLeft);
          console.log(this.tableaux[i].name, 'active?', this.tableaux[i].active);
        }
    } else {
      this.mysecond = 0;
    }
    console.log('mysecond', this.mysecond);
    setInterval(this.tickArrow, 1000);
  }
}
