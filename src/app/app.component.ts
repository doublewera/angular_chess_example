import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamerecordService } from './gamerecord.service';
import { TableauComponent } from './tableau/tableau.component';
import { Tbl } from './tableau/tbl';
import { Game } from './tableau/game';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TableauComponent
  ],
  providers: [GamerecordService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chessclock';
  mysecond: number = 0;
  myint: any;
  tableaux: Array<Tbl> = [
    new Tbl(5, true, "Left"),
    new Tbl(5, false, "Right")
  ];
  tick = () => {
    this.mysecond += 1;
    console.log('My Interval ' + this.myint);
    console.log('mysecond tick Arrow', this.mysecond);
    for (let i = 0; i < this.tableaux.length; i++) {
      if (this.tableaux[i].timeLeft < 1) {
        clearInterval(this.myint);
        this.service.saveRecord(new Game(1,28, 35))
      }
      this.tableaux[i].countdown();
      console.log(this.tableaux[i].name, 'time left', this.tableaux[i].timeLeft);
      console.log(this.tableaux[i].name, 'active?', this.tableaux[i].active);
    }
  }
  ngOnInit() {
    console.log('mysecond on Init', this.mysecond);
    this.myint = setInterval(this.tick, 1000);
    /*setInterval(() => {
      this.mysecond += 1;
      console.log('mysecond tick Arrow', this.mysecond);
      for (let i = 0; i < this.tableaux.length; i++) {
        this.tableaux[i].countdown();
        console.log(this.tableaux[i].name, 'time left', this.tableaux[i].timeLeft);
        console.log(this.tableaux[i].name, 'active?', this.tableaux[i].active);
      }
    }, 1000); */
  }
  ngOnChanges() {
    console.log('mysecond on changes', this.mysecond);
  }
  ngDoCheck() {
    console.log('mysecond DoCheck', this.mysecond);
  }
  ngAfterContentInit() {
    console.log('mysecond AfterContentInit', this.mysecond);
  }
  ngAfterContentChecked() {
    console.log('mysecond AfterContentChecked()', this.mysecond);
  }
  ngAfterViewInit() {
    console.log('mysecond AfterViewInit()', this.mysecond);
  }
  ngAfterViewChecked() {
    console.log('mysecond after view checked', this.mysecond);
  }
  clickMe(index: number) {
    this.tableaux[index].active = !this.tableaux[index].active;
    this.tableaux[(1 - index)].active = !this.tableaux[(1 - index)].active;
  }
  
  constructor (private service: GamerecordService) {
    
  }
}
